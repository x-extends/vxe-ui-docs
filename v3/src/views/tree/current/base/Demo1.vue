<template>
  <div>
    <div>
      <vxe-button status="primary" @click="selectCurrentEvent">选中节点4</vxe-button>
      <vxe-button status="primary" @click="clearCurrentEvent">取消节点4</vxe-button>
      <vxe-button status="success" @click="getCurrentEvent">获取已选</vxe-button>
    </div>

    <vxe-tree ref="treeRef" v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTreeInstance, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps = {
      transform: true,
      nodeConfig: {
        isHover: true,
        isCurrent: true
      },
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
        { title: '节点5', id: '5', parentId: null }
      ]
    }

    return {
      treeOptions
    }
  },
  methods: {
    selectCurrentEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setCurrentNodeId('4')
      }
    },
    clearCurrentEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.clearCurrentNode()
      }
    },
    getCurrentEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        const selectId = $tree.getCurrentNodeId()
        VxeUI.modal.alert(`${selectId}`)
      }
    }
  }
})
</script>
