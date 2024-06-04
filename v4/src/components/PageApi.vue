<template>
  <div class="api-view">
    <vxe-grid
      ref="gridRef"
      id="document_api"
      class="api-table"
      v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-input clearable class="search-input" v-model="searchName" type="search" :placeholder="`vxe-${apiName} ${$t('app.api.apiSearch')}`" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
      </template>

      <template #default_version="{ row }">
        <template v-if="row.version === 'extend-cell-area'">
          <a class="link pro" :href="appStore.pluginApiUrl" target="_blank">企业版</a>
        </template>
        <template v-else-if="row.disabled">
          <span class="disabled">已废弃</span>
        </template>
        <template v-else-if="row.abandoned">
          <span class="abandoned">评估阶段</span>
        </template>
        <template v-else>
          <span v-show="row.version" class="compatibility">v{{  row.version }}</span>
        </template>
      </template>

      <template #empty>
        <span class="red">找不对应 API，请输入正确的关键字！</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { VxeGridProps, VxeGridInstance } from 'vxe-pc-ui'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

interface RowVO {
  name: string
  enum: string
  type: string
  defVal: string
  version: string
  i18nKey: string
  i18nValue: string
  list: RowVO[]
}

const route = useRoute()
const appStore = useAppStore()

const gridRef = ref<VxeGridInstance>()

const searchName = ref('')
const tableData = ref<any[]>([])

const apiName = computed(() => {
  return route.params.name as string
})

const apiConfig = computed(() => {
  return appStore.compApiMaps ? appStore.compApiMaps[`vxe-${apiName.value}`] : null
})

const loadList = () => {
  gridOptions.loading = true
  return new Promise<void>(resolve => {
    setTimeout(() => {
      const list = XEUtils.clone(apiConfig.value, true) || []
      XEUtils.eachTree(list, (item, i, items, path, parent, nodes) => {
        if (parent) {
          item.i18nKey = nodes.map(item => `${item.name}`.replace(/\(.*/, '')).join('_')
        } else {
          item.i18nKey = `app.api.title.${item.name}`
        }
        item.i18nValue = i18n.global.t(item.i18nKey)
      }, { children: 'list' })
      tableData.value = list
      gridOptions.data = list
      gridOptions.loading = false
      handleSearch()
      resolve()
    }, 150)
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  autoResize: true,
  height: 'auto',
  loading: false,
  rowConfig: {
    useKey: true,
    keyField: 'id',
    isHover: true,
    isCurrent: true
  },
  columnConfig: {
    useKey: true,
    resizable: true,
    isHover: true,
    isCurrent: true
  },
  customConfig: {
    storage: true,
    mode: 'popup',
    checkMethod ({ column }) {
      if (['name', 'desc'].includes(column.field)) {
        return false
      }
      return true
    }
  },
  treeConfig: {
    childrenField: 'list',
    expandRowKeys: []
  },
  toolbarConfig: {
    custom: true,
    refresh: {
      query: loadList
    },
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  columns: [
    {
      field: 'name',
      title: i18n.global.t('app.api.title.prop'),
      type: 'html',
      treeNode: true,
      minWidth: 280,
      titlePrefix: {
        message: '参数名称及使用，如果是在 CDN 环境中使用 kebab-case（短横线式），\n如果项目基于 vue-cli 脚手架可以使用 camelCase（驼峰式）'
      },
      filters: [
        { label: 'Props', value: 'Props' },
        { label: 'Slots', value: 'Slots' },
        { label: 'Events', value: 'Events' },
        { label: 'Methods', value: 'Methods' }
      ]
    },
    { field: 'i18nValue', title: i18n.global.t('app.api.title.desc'), type: 'html', minWidth: 300 },
    { field: 'type', title: i18n.global.t('app.api.title.type'), type: 'html', minWidth: 140 },
    { field: 'enum', title: i18n.global.t('app.api.title.enum'), type: 'html', minWidth: 150 },
    { field: 'defVal', title: i18n.global.t('app.api.title.defVal'), type: 'html', minWidth: 160, titlePrefix: { message: '部分参数可支持全局设置，具体请查阅相关说明' } },
    { field: 'version', title: i18n.global.t('app.api.title.version'), type: 'html', width: 120, titlePrefix: { message: '该文档与最新版本保持同步，如果遇到参数无效时，\n请检查当前使用的版本号是否支持该参数' }, slots: { default: 'default_version' } }
  ],
  data: []
})

const handleValueHighlight = (str: string, filterRE: RegExp) => {
  return `${str || ''}`.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
}

const handleSearch = () => {
  const filterName = XEUtils.toValueString(searchName.value).trim()
  if (filterName) {
    const options = { children: 'list' }
    if (/pro/i.test(filterName)) {
      const rest = XEUtils.searchTree(tableData.value, item => item.version === 'extend-cell-area', options)
      gridOptions.data = rest
    } else {
      const filterRE = new RegExp(`${filterName}|${XEUtils.camelCase(filterName)}|${XEUtils.kebabCase(filterName)}`, 'i')
      const rest = XEUtils.searchTree(tableData.value, item => {
        return filterRE.test(item.name) || filterRE.test(item.i18nValue)
      }, options)
      XEUtils.eachTree(rest, item => {
        item.name = handleValueHighlight(item.name, filterRE)
        item.i18nValue = handleValueHighlight(item.i18nValue, filterRE)
      }, options)
      gridOptions.data = rest
      setTimeout(() => {
        const $grid = gridRef.value
        if ($grid) {
          $grid.setAllTreeExpand(true)
        }
      }, 300)
    }
  } else {
    gridOptions.data = tableData.value.slice(0)
    setTimeout(() => {
      const $grid = gridRef.value
      if ($grid) {
        $grid.setTreeExpand(gridOptions.data, true)
      }
    }, 300)
  }
}

// 调用频率间隔 500 毫秒
const searchEvent = XEUtils.debounce(handleSearch, 500, { leading: false, trailing: true })

watch(apiName, () => {
  const $grid = gridRef.value
  searchName.value = ''
  if ($grid) {
    $grid.clearAll()
  }
  loadList()
})

watch(() => appStore.compApiMaps, () => {
  loadList()
})

nextTick(() => {
  loadList()
})

appStore.updateComponentApiJSON()
</script>

<style lang="scss" scoped>
.api-view {
  height: 100%;
  overflow: hidden;
}
::v-deep(.keyword-lighten) {
  color: #000;
  background-color: #FFFF00;
}
</style>
