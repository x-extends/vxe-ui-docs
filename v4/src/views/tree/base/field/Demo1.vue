<template>
  <div>
    <vxe-tree
      is-hover
      title-field="name"
      children-field="childList"
      key-field="id"
      :data="treeList">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

const treeList = ref<VxeTreePropTypes.Data>([
  { name: '节点2', id: '2' },
  {
    name: '节点3',
    id: '3',
    childList: [
      { name: '节点3-1', id: '31' },
      {
        name: '节点3-2',
        id: '32',
        childList: [
          { name: '节点3-2-1', id: '321' },
          { name: '节点3-2-2', id: '322' }
        ]
      },
      {
        name: '节点3-3',
        id: '33',
        childList: [
          { name: '节点3-3-1', id: '331' },
          { name: '节点3-3-2', id: '332' },
          { name: '节点3-3-3', id: '333' }
        ]
      },
      { name: '节点3-4', id: '34' }
    ]
  },
  {
    name: '节点4',
    id: '4',
    childList: [
      {
        name: '节点4-1',
        id: '41',
        childList: [
          { name: '节点4-1-1', id: '411' },
          { name: '节点4-1-2', id: '412' }
        ]
      },
      { name: '节点4-2', id: '42' },
      {
        name: '节点4-3',
        id: '43',
        childList: [
          { name: '节点4-3-1', id: '431' },
          { name: '节点4-3-2', id: '432' }
        ]
      }
    ]
  },
  { name: '节点5', id: '5' }
])
</script>
