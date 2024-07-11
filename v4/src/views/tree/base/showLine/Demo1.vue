<template>
  <div>
    <vxe-switch v-model="showLine"></vxe-switch>
    <vxe-tree :data="treeList" :show-line="showLine"></vxe-tree>
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
      {
        title: '节点3-2',
        children: [
          {
            title: '节点3-2-1',
            children: [
              { title: '节点3-2-1-1' },
              { title: '节点3-2-1-2' },
              { title: '节点3-2-1-3' }
            ]
          },
          {
            title: '节点3-2-2',
            children: [
              { title: '节点3-2-2-1' },
              { title: '节点3-2-2-2' }
            ]
          }
        ]
      },
      {
        title: '节点3-3',
        children: [
          {
            title: '节点3-3-1',
            children: [
              { title: '节点3-3-1-1' },
              { title: '节点3-3-1-2' }
            ]
          },
          { title: '节点3-3-2' },
          {
            title: '节点3-3-3',
            children: [
              { title: '节点3-3-3-1' },
              { title: '节点3-3-3-2' },
              { title: '节点3-3-3-3' },
              { title: '节点3-3-3-4' }
            ]
          }
        ]
      },
      { title: '节点3-4' }
    ]
  },
  {
    title: '节点4',
    children: [
      {
        title: '节点4-1',
        children: [
          { title: '节点4-1-1' },
          { title: '节点4-1-2' },
          { title: '节点4-1-3' }
        ]
      },
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
