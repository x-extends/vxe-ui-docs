<template>
  <div>
    缩进：<vxe-radio-group v-model="indent">
      <vxe-radio-button :checked-value="20" content="20px"></vxe-radio-button>
      <vxe-radio-button :checked-value="30" content="30px"></vxe-radio-button>
      <vxe-radio-button :checked-value="40" content="40px"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-tree
      :data="treeList"
      :indent="indent"
      show-line
      transform
    ></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTreePropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const indent: number = 20

    const treeList: VxeTreePropTypes.Data = [
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
      { title: '节点5', id: '5', parentId: null }
    ]

    return {
      indent,
      treeList
    }
  }
})
</script>
