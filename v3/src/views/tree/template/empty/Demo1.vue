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

<script lang="ts">
import Vue from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const treeList: VxeTreePropTypes.Data = []

    return {
      treeList
    }
  }
})
</script>
