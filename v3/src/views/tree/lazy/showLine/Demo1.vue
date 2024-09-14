<template>
  <div>
    <vxe-tree
      lazy
      show-checkbox
      show-line
      icon-open="vxe-icon-square-minus"
      icon-close="vxe-icon-square-plus"
      :node-config="nodeConfig"
      :load-method="loadMethod"
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
  hasChild?: boolean
}

export default Vue.extend({
  data () {
    const nodeConfig: VxeTreePropTypes.NodeConfig = {
      isHover: true
    }

    const treeList: NodeVO[] = [
      { title: '节点2', id: '2', hasChild: true },
      { title: '节点3', id: '3', hasChild: true },
      { title: '节点4', id: '4', hasChild: true },
      { title: '节点5', id: '5', hasChild: false }
    ]

    return {
      nodeConfig,
      treeList
    }
  },
  methods: {
    getNodeListApi  (node: any) {
      return new Promise<NodeVO[]>(resolve => {
        // 模拟后端接口
        setTimeout(() => {
          resolve([
            { title: `${node.title}-1`, id: `${node.id}1`, hasChild: Math.random() * 10 < 6 },
            { title: `${node.title}-2`, id: `${node.id}2`, hasChild: Math.random() * 10 < 6 }
          ])
        }, 500)
      })
    },
    loadMethod ({ node }) {
      return this.getNodeListApi(node)
    }
  }
})
</script>
