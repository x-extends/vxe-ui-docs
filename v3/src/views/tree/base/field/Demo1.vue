<template>
  <div>
    <vxe-tree v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  name: string
  key: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps<NodeVO> = {
      transform: true,
      titleField: 'name',
      keyField: 'key',
      parentField: 'parentId',
      nodeConfig: {
        isHover: true
      },
      data: [
        { name: '节点2', key: '2', parentId: null },
        { name: '节点3', key: '3', parentId: null },
        { name: '节点3-1', key: '31', parentId: '3' },
        { name: '节点3-2', key: '32', parentId: '3' },
        { name: '节点3-2-1', key: '321', parentId: '32' },
        { name: '节点3-2-2', key: '322', parentId: '32' },
        { name: '节点3-3', key: '33', parentId: '3' },
        { name: '节点3-3-1', key: '331', parentId: '33' },
        { name: '节点3-3-2', key: '332', parentId: '33' },
        { name: '节点3-3-3', key: '333', parentId: '33' },
        { name: '节点3-4', key: '34', parentId: '3' },
        { name: '节点4', key: '4', parentId: null },
        { name: '节点4-1', key: '41', parentId: '4' },
        { name: '节点4-1-1', key: '411', parentId: '42' },
        { name: '节点4-1-2', key: '412', parentId: '42' },
        { name: '节点4-2', key: '42', parentId: '4' },
        { name: '节点4-3', key: '43', parentId: '4' },
        { name: '节点4-3-1', key: '431', parentId: '43' },
        { name: '节点4-3-2', key: '432', parentId: '43' },
        { name: '节点5', key: '5', parentId: null }
      ]
    }

    return {
      treeOptions
    }
  }
})
</script>
