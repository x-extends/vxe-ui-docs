<template>
  <div>
    <vxe-tree
      transform
      height="300"
      :data="treeList">
      <template #empty>
        <vxe-empty content="没有更多数据了！"></vxe-empty>
      </template>
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

const treeList = ref<VxeTreePropTypes.Data>([])
</script>
