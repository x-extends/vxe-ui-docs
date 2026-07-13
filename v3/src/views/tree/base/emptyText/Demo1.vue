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

<script lang="ts">
import Vue from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeList: NodeVO[] = []

    return {
      treeList
    }
  }
})
</script>
