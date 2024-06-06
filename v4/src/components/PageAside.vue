<template>
  <div ref="asideElemRef" class="page-aside">
    <div class="nav-top">
      <vxe-pulldown v-model="showSearchList" transfer>
        <vxe-input v-model="searchName" class="search-input" type="search" placeholder="文档搜索" clearable @click="clickSearchEvent" @change="changeSearchEvent"></vxe-input>

        <template #dropdown>
          <div class="nav-search-wrapper">
            <div v-if="searchName && searchList.length">
              <vxe-tree
                is-hover
                is-current
                ref="treeRef"
                :data="searchList"
                title-field="title"
                children-field="searchResult"
                trigger="row">
                <template #title="{ row }">
                  <span v-html="row.title"></span>
                </template>
              </vxe-tree>
            </div>
            <div v-else class="nav-search-empty">
              <div v-if="!searchName">输入关键字搜索文档</div>
              <div v-else-if="searchLoading">
                <vxe-icon name="refresh" roll></vxe-icon>
                <span>正在搜索，请稍等！</span>
              </div>
              <div v-else>找不到与 “<span class="keyword-lighten">{{ searchName }}</span>” 相关的结果！</div>
            </div>
          </div>
        </template>
      </vxe-pulldown>
    </div>
    <div class="nav-item nav-level1" v-for="(item1, index1) in navList" :key="index1" :class="[{'is-expand': item1.isExpand}]">
      <div class="nav-name" :title="item1.title" @click="toggleExpand(item1)">
        <span class="vxe-icon-arrow-right nav-link-icon"></span>
        <span class="nav-item-text">{{ item1.title }}</span>
      </div>
      <div v-if="item1.children && item1.children.length" class="nav-subs">
        <div class="nav-item nav-level2" v-for="(item2, index2) in item1.children" :key="index2">
          <div class="nav-name" :title="item2.title">
            <vxe-link v-if="item2.routerLink" :class="['nav-item-link', item2.routerLink.name]" :router-link="item2.routerLink">{{ item2.title }}</vxe-link>
            <vxe-link v-else-if="item2.linkUrl" class="nav-item-link" :href="item2.linkUrl" target="_blank">{{ item2.title }}</vxe-link>
            <span v-else class="nav-item-text">∞ {{ item2.title }}</span>
          </div>
          <div v-if="!['API'].includes(item1.title) && item2.children && item2.children.length" class="nav-subs">
            <div class="nav-item nav-level3" v-for="(item3, index3) in item2.children" :key="index3">
              <div class="nav-name" :title="item3.title">
                <vxe-link v-if="item3.routerLink" :class="['nav-item-link', item3.routerLink.name]" :router-link="item3.routerLink">{{ item3.title }}</vxe-link>
                <vxe-link v-else-if="item3.linkUrl" class="nav-item-link" :href="item3.linkUrl" target="_blank">{{ item3.title }}</vxe-link>
                <span v-else class="nav-item-text">∞ {{ item3.title }}</span>
              </div>
              <div v-if="item3.children && item3.children.length" class="nav-subs">
                <div class="nav-item nav-level4" v-for="(item4, index3) in item3.children" :key="index3">
                  <div class="nav-name" :title="item4.title">
                    <vxe-link v-if="item4.routerLink" :class="['nav-item-link', item4.routerLink.name]" :router-link="item4.routerLink">{{ item4.title }}</vxe-link>
                    <vxe-link v-else-if="item4.linkUrl" class="nav-item-link" :href="item4.linkUrl" target="_blank">{{ item4.title }}</vxe-link>
                    <span v-else class="nav-item-text">{{ item4.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { navConfigList, NavVO } from '@/common/nav-config'
import { VxeTreeInstance } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const route = useRoute()
const appStore = useAppStore()

const treeRef = ref<VxeTreeInstance>()

const navList = ref<NavVO[]>([])

const asideElemRef = ref<HTMLElement>()
const searchName = ref('')
const showSearchList = ref(false)
const searchLoading = ref(false)
const searchList = ref<NavVO[]>([])

const handleNavApiParams = (item) => {
  if (item.isAPI) {
    if (item.routerLink && item.routerLink.params) {
      item.routerLink.query = Object.assign({}, item.routerLink.query, { apiKey: item.routerLink.params.name })
    }
  }
}

const createNavList = () => {
  navConfigList.forEach(item1 => {
    item1.isExpand = item1.isExpand || false
    item1.children?.forEach(item2 => {
      handleNavApiParams(item2)
      item2.children?.forEach(item3 => {
        handleNavApiParams(item3)
      })
    })
  })
  const apiItem = navConfigList.find(item => item.title === 'API')
  if (apiItem) {
    const apiList: NavVO[] = []
    XEUtils.each(XEUtils.clone(appStore.compApiMaps, true), (list, compName) => {
      const name = compName.split('-').slice(1).join('-')
      apiList.push({
        title: `${compName}`,
        routerLink: { name: 'DocsApi', params: { name } },
        children: XEUtils.mapTree(list, obj => {
          obj.title = obj.name
          return obj
        }, { children: 'list', mapChildren: 'children' })
      })
    })
    apiItem.children = apiList
  }
  const list = XEUtils.clone(navConfigList, true)
  navList.value = list
  updateExpand()
}

const handleSearch = () => {
  const filterName = XEUtils.toValueString(searchName.value).trim()
  if (filterName) {
    const filterRE = new RegExp(`${filterName}|${XEUtils.camelCase(filterName)}|${XEUtils.kebabCase(filterName)}`, 'i')
    const rest = XEUtils.searchTree(navList.value, (item) => {
      return filterRE.test(item.title)
    }, { children: 'children', mapChildren: 'searchResult' })
    XEUtils.eachTree(rest, (item) => {
      item.title = item.title.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
    }, { children: 'searchResult' })
    searchList.value = rest
    searchList.value.forEach(group => {
      group.isExpand = true
    })
  } else {
    searchList.value = []
  }
  searchLoading.value = false
  setTimeout(() => expandAllApiTree(), 100)
}

// 调用频率间隔 500 毫秒
const searchEvent = XEUtils.debounce(handleSearch, 500, { leading: false, trailing: true })

const clickSearchEvent = () => {
  searchLoading.value = true
  if (!showSearchList.value) {
    handleSearch()
  }
  showSearchList.value = true
}

const changeSearchEvent = () => {
  searchLoading.value = true
  showSearchList.value = true
  searchEvent()
}

const expandAllApiTree = () => {
  const $tree = treeRef.value
  if ($tree) {
    $tree.setAllExpand(true)
  }
}

const toggleExpand = (item1: NavVO) => {
  item1.isExpand = !item1.isExpand
}

const scrollToNav = (item: NavVO) => {
  nextTick(() => {
    const asideElem = asideElemRef.value
    if (asideElem && item.routerLink) {
      const linkEl = asideElem.querySelector(`.nav-item-link.${item.routerLink.name}`)
      if (linkEl) {
        (linkEl as any).scrollIntoViewIfNeeded()
      }
    }
  })
}

const updateExpand = () => {
  const routeName = route.name
  const apiKey = route.query.apiKey
  const rest = XEUtils.findTree(navList.value, item => {
    const { routerLink } = item
    if (!routerLink) {
      return false
    }
    if (apiKey ? (routerLink.params && routerLink.params.name === apiKey) : routerLink.name === routeName) {
      return true
    }
    return false
  }, { children: 'children' })
  if (rest) {
    rest.nodes[0].isExpand = true
    scrollToNav(rest.item)
  }
}

watch(route, () => {
  updateExpand()
})

watch(() => appStore.compApiMaps, () => {
  createNavList()
})

createNavList()
updateExpand()

appStore.updateComponentApiJSON()
</script>

<style lang="scss" scoped>
.page-aside {
  .nav-top {
    position: sticky;
    top: 0;
    left: 0;
    padding: 16px;
    text-align: center;
    background-color: var(--vxe-ui-docs-layout-background-color);
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.12);
    z-index: 3;
  }
  .search-input {
    width: 100%;
  }
  .nav-item {
    position: relative;
    user-select: none;
  }
  .nav-name {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      display: inline-block;
    }
  }
  .nav-link-icon {
    font-size: 14px;
    margin-right: 8px;
    transition: transform .2s ease-in-out;
  }
  .nav-item-link {
    display: block;
    &.router-link-exact-active {
      color: var(--vxe-ui-docs-primary-color);
      font-weight: 700;
    }
  }
  .nav-level1 {
    & > .nav-name {
      padding: 0 1.2em 0.4em 1.2em;
      font-size: 16px;
      font-weight: 700;
      line-height: 38px;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        bottom: 0.2em;
        left: 1.2em;
        width: calc(100% - 2.4em);
        border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
      }
    }
    & > .nav-subs {
      display: none;
    }
    &.is-expand {
      & > .nav-name {
        .nav-link-icon {
          transform: rotate(90deg);
        }
      }
      & > .nav-subs {
        display: block;
      }
    }
  }
  .nav-level2 {
    & > .nav-name {
      font-size: 15px;
      line-height: 34px;
      padding-left: 3.4em;
    }
    .nav-item-text {
      color: var(--vxe-ui-input-placeholder-color);
    }
  }
  .nav-level3 {
    & > .nav-name {
      font-size: 14px;
      line-height: 32px;
      padding-left: 5em;
    }
  }
  .nav-level4 {
    & > .nav-name {
      font-size: 12px;
      line-height: 28px;
      padding-left: 7.4em;
    }
  }
}
</style>

<style lang="scss">
.nav-search-wrapper {
  max-height: 70vh;
  width: 600px;
  padding: 32px;
  overflow: auto;
  border-radius: 4px;
  font-size: 18px;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  background-color: var(--vxe-ui-docs-layout-background-color);
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.nav-search-empty {
  padding: 40px 16px;
  text-align: center;
  font-size: 18px;
  word-break: break-all;
}
</style>
