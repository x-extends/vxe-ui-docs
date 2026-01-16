<template>
  <div>
    <div>
      <vxe-input v-model="treeOptions.filterValue" type="search" clearable></vxe-input>
    </div>

    <vxe-tree v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const treeOptions = reactive<VxeTreeProps<NodeVO>>({
  transform: true,
  filterValue: '',
  data: [
    { title: 'Node2', id: '2', parentId: null },
    { title: 'Node23', id: '3', parentId: null },
    { title: 'Node23-1', id: '31', parentId: '3' },
    { title: 'Node23-2', id: '32', parentId: '3' },
    { title: 'Node23-2-1', id: '321', parentId: '32' },
    { title: 'Node23-2-2', id: '322', parentId: '32' },
    { title: 'Node23-3', id: '33', parentId: '3' },
    { title: 'Node23-3-1', id: '331', parentId: '33' },
    { title: 'Node23-3-2', id: '332', parentId: '33' },
    { title: 'Node23-3-3', id: '333', parentId: '33' },
    { title: 'Node23-4', id: '34', parentId: '3' },
    { title: '节点4', id: '4', parentId: null },
    { title: '节点4-1', id: '41', parentId: '4' },
    { title: '节点4-1-1', id: '411', parentId: '42' },
    { title: '节点4-1-2', id: '412', parentId: '42' },
    { title: '节点4-2', id: '42', parentId: '4' },
    { title: '节点4-3', id: '43', parentId: '4' },
    { title: '节点4-3-1', id: '431', parentId: '43' },
    { title: '节点4-3-2', id: '432', parentId: '43' },
    { title: '节点5', id: '5', parentId: null }
  ]
})
</script>
