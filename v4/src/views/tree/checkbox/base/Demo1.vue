<template>
  <div>
    <vxe-tree
      show-checkbox
      key-field="id"
      :data="treeList"
      v-model:check-node-keys="checkNodeKeys">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

const checkNodeKeys = ref([3, 31, 331])

const treeList = ref<VxeTreePropTypes.Data>([
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
])
</script>
