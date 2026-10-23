<template>
  <div>
    <vxe-tree-select v-model="val1" v-bind="treeSelectOptions"></vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const val1 = ref()

// 模拟后端接口
const loadList = (searchValue: string) => {
  const treeList = [
    { title: '节点2', id: '2' },
    {
      title: '节点3',
      id: '3',
      children: [
        { title: '节点3-1', id: '31' },
        { title: '节点3-2', id: '32' },
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
        { title: '节点4-1', id: '41' },
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
  return new Promise<NodeVO[]>(resolve => {
    setTimeout(() => {
      const treeRest = searchValue
        ? XEUtils.searchTree(treeList, item => `${item.title}`.indexOf(searchValue) > -1, {
          children: 'children'
        })
        : treeList
      const listRest = XEUtils.toTreeArray(treeRest)
      resolve(listRest)
    }, 200)
  })
}

const treeSelectOptions = reactive<VxeTreeSelectProps<NodeVO>>({
  filterable: true,
  remote: true,
  remoteConfig: {
    async queryMethod ({ searchValue }) {
      treeSelectOptions.options = await loadList(searchValue)
    }
  },
  optionProps: {
    label: 'title',
    value: 'id'
  },
  treeConfig: {
    transform: true,
    keyField: 'id',
    parentField: 'parentId'
  },
  options: []
})
</script>
