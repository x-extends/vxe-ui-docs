<template>
  <div>
    <vxe-tree :data="treeList" show-checkbox show-line></vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

const showLine = ref(true)
const treeList = ref<VxeTreePropTypes.Data>([
  { title: '节点2' },
  {
    title: '节点3',
    children: [
      { title: '节点3-1' },
      { title: '节点3-2' },
      {
        title: '节点3-3',
        children: [
          { title: '节点3-3-1' },
          { title: '节点3-3-2' },
          { title: '节点3-3-3' }
        ]
      },
      { title: '节点3-4' }
    ]
  },
  {
    title: '节点4',
    children: [
      { title: '节点4-1' },
      { title: '节点4-2' },
      {
        title: '节点4-3',
        children: [
          { title: '节点4-3-1' },
          { title: '节点4-3-2' }
        ]
      }
    ]
  },
  { title: '节点5' }
])
</script>
