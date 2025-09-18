<template>
  <div>
    <vxe-tree-select v-model="val1" :options="treeList" :lazy-options="lazyList" :treeConfig="treeConfig" multiple clearable></vxe-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  label: string
  value: string
  hasChild?: boolean
}

let treeKey = 1

export default Vue.extend({
  data () {
    const treeConfig: VxeTreeSelectPropTypes.TreeConfig = {}

    const treeList: VxeTreeSelectPropTypes.Options = [
      { label: '节点2', value: '2', hasChild: true },
      { label: '节点3', value: '3', hasChild: true },
      { label: '节点4', value: '4', hasChild: true },
      { label: '节点5', value: '5', hasChild: false }
    ]
    const lazyList: VxeTreeSelectPropTypes.Options = [
      { label: '节点4-2', value: '4-2' }
    ]

    return {
      val1: ['4-2'],
      treeConfig,
      treeList,
      lazyList
    }
  },
  created () {
    this.treeConfig = {
      lazy: true,
      loadMethod: ({ node }) => {
        return this.getNodeListApi(node)
      }
    }
  },
  methods: {
    getNodeListApi (node: any) {
      return new Promise<NodeVO[]>(resolve => {
        // 模拟后端接口
        setTimeout(() => {
          resolve([
            { label: `节点${node.value}-${treeKey}`, value: `${node.value}-${treeKey}`, hasChild: Math.random() * 10 < 6 },
            { label: `节点${node.value}-${treeKey + 1}`, value: `${node.value}-${treeKey + 1}`, hasChild: Math.random() * 10 < 6 }
          ])
          treeKey += 2
        }, 500)
      })
    }
  }
})
</script>
