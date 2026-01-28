<template>
  <div>
    <vxe-button @click="scrollEvent('527')">定位-深圳南山区</vxe-button>
    <vxe-button @click="scrollEvent('30')">定位-上海虹口区</vxe-button>
    <vxe-button @click="scrollEvent('92')">定位-重庆市云阳县</vxe-button>

    <vxe-tree ref="treeRef" v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeInstance, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  id: number
  parentId: number | null
  name: string
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps<NodeVO> = {
      loading: false,
      height: 400,
      transform: true,
      titleField: 'name',
      virtualYConfig: {
        enabled: true,
        gt: 0
      }
    }
    return {
      treeOptions
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      this.treeOptions.loading = true
      fetch('/resource/json/provinces_list.json').then(res => res.json()).then((data: NodeVO[]) => {
        this.treeOptions.loading = false
        const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
        if ($tree) {
          $tree.reloadData(data)
        }
      })
    },
    scrollEvent (nodeId: string) {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.scrollToNodeId(nodeId)
      }
    }
  }
})
</script>
