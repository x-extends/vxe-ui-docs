<template>
  <div>
    <div>
      <vxe-button status="primary" @click="selectRadioEvent">选中节点4</vxe-button>
      <vxe-button status="primary" @click="clearRadioEvent">取消节点4</vxe-button>
      <vxe-button status="success" @click="getRadioEvent">获取已选</vxe-button>
    </div>

    <vxe-tree v-bind="treeOptions" :check-node-key.sync="checkNodeKey"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTreePropTypes, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps<NodeVO> = {
      transform: true,
      showRadio: true,
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

    const checkNodeKey = null as VxeTreePropTypes.CheckNodeKey

    return {
      treeOptions,
      checkNodeKey
    }
  },
  methods: {
    selectRadioEvent () {
      this.checkNodeKey = '值3'
    },
    clearRadioEvent () {
      this.checkNodeKey = null
    },
    getRadioEvent () {
      VxeUI.modal.alert(`${this.checkNodeKey}`)
    }
  }
})
</script>
