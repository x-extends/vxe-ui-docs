<template>
  <div>
    <vxe-tree v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  id: string
  parentId: string | null
  title: string
}

const treeOptions = reactive<VxeTreeProps<NodeVO>>({
  height: 300,
  transform: true,
  useScrollbar: false,
  data: [
    { title: '节点2', id: '2', parentId: null },
    { title: '节点3', id: '3', parentId: null },
    { title: '节点3-1', id: '31', parentId: '3' },
    { title: '节点3-2', id: '32', parentId: '3' },
    { title: '节点3-2-1', id: '321', parentId: '32' },
    { title: '节点3-2-2', id: '322', parentId: '32' },
    { title: '节点3-3', id: '33', parentId: '3' },
    { title: '节点3-3-1', id: '331', parentId: '33' },
    { title: '节点3-3-2', id: '332', parentId: '33' },
    { title: '节点3-3-3', id: '333', parentId: '33' },
    { title: '节点3-4', id: '34', parentId: '3' },
    { title: '节点4', id: '4', parentId: null },
    { title: '节点4-1', id: '41', parentId: '4' },
    { title: '节点4-1-1', id: '411', parentId: '42' },
    { title: '节点4-1-2', id: '412', parentId: '42' },
    { title: '节点4-2', id: '42', parentId: '4' },
    { title: '节点4-3', id: '43', parentId: '4' },
    { title: '节点4-3-1', id: '431', parentId: '43' },
    { title: '节点4-3-2', id: '432', parentId: '43' },
    { title: '节点5', id: '5', parentId: null },
    { title: '节点6', id: '6', parentId: null },
    { title: '节点7', id: '7', parentId: null },
    { title: '节点8', id: '8', parentId: null },
    { title: '节点9', id: '9', parentId: null },
    { title: '节点10', id: '10', parentId: null },
    { title: '节点10-1', id: '101', parentId: '10' },
    { title: '节点10-1', id: '102', parentId: '10' },
    { title: '节点11', id: '11', parentId: null },
    { title: '节点12', id: '12', parentId: null },
    { title: '节点13', id: '13', parentId: null },
    { title: '节点14', id: '14', parentId: null },
    { title: '节点14-1', id: '141', parentId: '14' },
    { title: '节点14-1', id: '142', parentId: '14' }
  ]
})
</script>
