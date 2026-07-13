<template>
  <div>
    <vxe-tree
      transform
      title-field="title"
      key-field="id"
      parent-field="parentId"
      empty-text="已经没有更多数据了！"
      :data="treeList">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const treeList = ref<NodeVO[]>([])
</script>
