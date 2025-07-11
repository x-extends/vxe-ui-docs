<template>
  <div>
    <div>
      <vxe-input v-model="filterName" type="search" clearable @change="searchEvent"></vxe-input>
    </div>

    <vxe-tree ref="treeRef" class="mytree-list" v-bind="treeOptions">
      <template #title="{ node }">
        <span v-html="node.title"></span>
      </template>
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeTreeInstance, VxeTreeProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface NodeVO {
  title: string
  id: string
  children?: NodeVO[]
}

const treeRef = ref<VxeTreeInstance<NodeVO>>()

const allData: NodeVO[] = [
  { title: '节点2', id: '2' },
  {
    title: '节点3',
    id: '3',
    children: [
      { title: '节点3-1', id: '31' },
      {
        title: '节点3-2',
        id: '32',
        children: [
          { title: '节点3-2-1', id: '321' },
          { title: '节点3-2-2', id: '322' }
        ]
      },
      {
        title: '节点3-3',
        id: '33',
        children: [
          { title: '节点3-3-1', id: '331' },
          { title: '节点3-3-2', id: '332' },
          { title: '节点3-3-3', id: '333' }
        ]
      },
      { title: '节点3-4', id: '34' }
    ]
  },
  {
    title: '节点4',
    id: '4',
    children: [
      {
        title: '节点4-1',
        id: '41',
        children: [
          { title: '节点4-1-1', id: '411' },
          { title: '节点4-1-2', id: '412' }
        ]
      },
      { title: '节点4-2', id: '42' },
      {
        title: '节点4-3',
        id: '43',
        children: [
          { title: '节点4-3-1', id: '431' },
          { title: '节点4-3-2', id: '432' }
        ]
      }
    ]
  },
  { title: '节点5', id: '5' }
]

const filterName = ref('')
const treeOptions = reactive<VxeTreeProps>({
  childrenField: 'childList',
  data: []
})

const handleSearch = () => {
  const filterVal = XEUtils.toValueString(filterName.value).trim().toLowerCase()
  if (filterVal) {
    const filterRE = new RegExp(filterVal, 'gi')
    const rest = XEUtils.searchTree(allData, item => {
      return String(item.title).toLowerCase().indexOf(filterVal) > -1
    }, { children: 'children', mapChildren: 'childList', isEvery: true })
    XEUtils.eachTree(rest, item => {
      item.title = String(item.title).replace(filterRE, match => `<span class="keyword-highlight">${match}</span>`)
    }, { children: 'childList' })
    treeOptions.data = rest
  } else {
    const rest = XEUtils.searchTree(allData, () => true, { children: 'children', mapChildren: 'childList', isEvery: true })
    treeOptions.data = rest
  }
  // 搜索之后默认展开所有子节点。清除搜索之后默认收起所有子节点
  nextTick(() => {
    const $tree = treeRef.value
    if ($tree) {
      $tree.setAllExpandNode(!!filterVal)
    }
  })
}

// 节流函数,间隔500毫秒触发搜索
const searchEvent = XEUtils.throttle(function () {
  handleSearch()
}, 500, { trailing: true, leading: true })

handleSearch()
</script>

<style lang="scss" scoped>
.mytree-list {
  ::v-deep(.keyword-highlight)  {
    background-color: #FFFF00;
  }
}
</style>
