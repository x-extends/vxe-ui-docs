<template>
  <div>
    <div style="display: flex;flex-direction: row;">
      <div style="flex-grow: 1;border: 1px solid red;margin: 0 8px;padding: 8px;">
        <vxe-button status="success" @click="resultEvent1">获取数据1</vxe-button>
        <vxe-tree ref="treeRef1" v-bind="treeOptions1"></vxe-tree>
      </div>
      <div style="flex-grow: 1;border: 1px solid red;margin: 0 8px;padding: 8px;">
        <vxe-button status="success" @click="resultEvent2">获取数据2</vxe-button>
        <vxe-tree ref="treeRef2" v-bind="treeOptions2"></vxe-tree>
      </div>
      <div style="flex-grow: 1;border: 1px solid red;margin: 0 8px;padding: 8px;">
        <vxe-button status="success" @click="resultEvent3">获取数据3</vxe-button>
        <vxe-tree ref="treeRef3" v-bind="treeOptions3"></vxe-tree>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeProps, VxeTreeInstance } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions1: VxeTreeProps<NodeVO> = {
      height: 400,
      transform: true,
      drag: true,
      dragConfig: {
        isCrossDrag: true,
        isCrossTreeDrag: true
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

    const treeOptions2: VxeTreeProps<NodeVO> = {
      height: 400,
      transform: true,
      drag: true,
      dragConfig: {
        isCrossDrag: true,
        isCrossTreeDrag: true
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

    const treeOptions3: VxeTreeProps<NodeVO> = {
      height: 400,
      transform: true,
      drag: true,
      dragConfig: {
        isCrossDrag: true,
        isCrossTreeDrag: true
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
      treeOptions1,
      treeOptions2,
      treeOptions3
    }
  },
  methods: {
    resultEvent1 () {
      const $tree = this.$refs.treeRef1 as VxeTreeInstance<NodeVO>
      if ($tree) {
        const treeData = $tree.getFullData()
        console.log(treeData)
      }
    },
    resultEvent2 () {
      const $tree = this.$refs.treeRef2 as VxeTreeInstance<NodeVO>
      if ($tree) {
        const treeData = $tree.getFullData()
        console.log(treeData)
      }
    },
    resultEvent3 () {
      const $tree = this.$refs.treeRef3 as VxeTreeInstance<NodeVO>
      if ($tree) {
        const treeData = $tree.getFullData()
        console.log(treeData)
      }
    }
  }
})
</script>
