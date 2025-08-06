<template>
  <div>
    <div>
      <vxe-button status="primary" @click="selectCheckboxEvent">选中节点</vxe-button>
      <vxe-button status="primary" @click="clearCheckboxEvent">取消节点5</vxe-button>
      <vxe-button status="primary" @click="selectAllEvent">选中所有</vxe-button>
      <vxe-button status="primary" @click="clearAllEvent">取消所有</vxe-button>
      <vxe-button status="success" @click="getCheckboxEvent">获取已选中</vxe-button>
    </div>

    <vxe-tree
      ref="treeRef"
      v-bind="treeOptions"
      :check-node-keys.sync="checkNodeKeys">
    </vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTreeInstance, VxeTreePropTypes, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps<NodeVO> = {
      transform: true,
      showCheckbox: true,
      keyField: 'id',
      data: [
        { title: '节点2', id: '值2', parentId: null },
        { title: '节点3', id: '值3', parentId: null },
        { title: '节点3-1', id: '值31', parentId: '值3' },
        { title: '节点3-2', id: '值32', parentId: '值3' },
        { title: '节点3-2-1', id: '值321', parentId: '值32' },
        { title: '节点3-2-2', id: '值322', parentId: '值32' },
        { title: '节点3-3', id: '值33', parentId: '值3' },
        { title: '节点3-3-1', id: '值331', parentId: '值33' },
        { title: '节点3-3-2', id: '值332', parentId: '值33' },
        { title: '节点3-3-3', id: '值333', parentId: '值33' },
        { title: '节点3-4', id: '值34', parentId: '值3' },
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

    const checkNodeKeys: VxeTreePropTypes.CheckNodeKeys = []

    return {
      treeOptions,
      checkNodeKeys
    }
  },
  methods: {
    selectCheckboxEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setCheckboxByNodeId(['值31', '5'], true)
      }
    },
    clearCheckboxEvent  () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setCheckboxByNodeId('5', false)
      }
    },
    selectAllEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setAllCheckboxNode(true)
      }
    },
    clearAllEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setAllCheckboxNode(false)
      }
    },
    getCheckboxEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        const selectIds = $tree.getCheckboxNodeIds()
        VxeUI.modal.alert(selectIds.length)
      }
    }
  }
})
</script>
