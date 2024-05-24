<template>
  <div class="page-aside">
    <div class="nav-top">
      <vxe-input v-model="searchName" placeholder="文档搜索"></vxe-input>
    </div>
    <div class="nav-item nav-level1" v-for="(item1, index1) in navList" :key="index1" :class="[{'is-expand': item1.isExpand}]">
      <div class="nav-name" :title="item1.title" @click="toggleExpand(item1)">
        <span class="vxe-icon-arrow-right nav-link-icon"></span>
        <span>{{ item1.title }}</span>
      </div>
      <div class="nav-subs">
        <div class="nav-item nav-level2" v-for="(item2, index2) in item1.children" :key="index2">
          <div class="nav-name" :title="item2.title">
            <vxe-link v-if="item2.routerLink" class="nav-item-link" :router-link="item2.routerLink">{{ item2.title }}</vxe-link>
            <vxe-link v-else-if="item2.linkUrl" class="nav-item-link" :href="item2.linkUrl" target="_blank">{{ item2.title }}</vxe-link>
            <span v-else>{{ item2.title }}</span>
          </div>
          <div v-if="item2.children && item2.children.length" class="nav-subs">
            <div class="nav-item nav-level3" v-for="(item3, index3) in item2.children" :key="index3">
              <div class="nav-name" :title="item3.title">
                <vxe-link v-if="item3.routerLink" class="nav-item-link" :router-link="item3.routerLink">{{ item3.title }}</vxe-link>
                <span v-else>{{ item3.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { navConfigList, NavVO } from '@/common/nav-config'

const searchName = ref('')

const navList = ref<NavVO[]>([])

const createNavList = () => {
  navConfigList.forEach(item => {
    item.isExpand = item.isExpand || false
  })
  navList.value = navConfigList
}

const toggleExpand = (item1: NavVO) => {
  item1.isExpand = !item1.isExpand
}

createNavList()
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
  }
  .nav-level3 {
    & > .nav-name {
      font-size: 14px;
      line-height: 32px;
      padding-left: 5em;
    }
  }
}
</style>
