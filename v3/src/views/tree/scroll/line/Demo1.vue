<template>
  <div>
    显示连接线：<vxe-switch v-model="treeOptions.showLine"></vxe-switch>

    <vxe-button status="primary" @click="expandAllEvent">展开所有</vxe-button>
    <vxe-button status="primary" @click="clearAllEvent">关闭所有</vxe-button>

    <vxe-tree ref="treeRef" v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTreeInstance, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  id: number
  parentId: number | null
  name: string
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps = {
      loading: false,
      height: 800,
      transform: true,
      showLine: true,
      showCheckbox: true,
      titleField: 'name',
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      data: []
    }

    return {
      treeOptions
    }
  },
  mounted () {
    this.loadList()
  },
  methods: {
    loadList () {
      this.treeOptions.loading = true
      fetch('https://vxeui.com/resource/json/provinces_list.json').then(res => res.json()).then((data: NodeVO[]) => {
        this.treeOptions.loading = false
        this.treeOptions.data = data
      })
    },
    expandAllEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setAllExpandNode(true)
      }
    },
    clearAllEvent () {
      const $tree = this.$refs.treeRef as VxeTreeInstance<NodeVO>
      if ($tree) {
        $tree.setAllExpandNode(false)
      }
    }
  }
})
</script>
