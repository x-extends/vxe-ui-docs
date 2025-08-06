<template>
  <div>
    <vxe-button status="primary" @click="expandAllEvent">展开所有</vxe-button>
    <vxe-button status="primary" @click="clearAllEvent">关闭所有</vxe-button>

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
    const treeOptions: VxeTreeProps = {
      loading: false,
      height: 400,
      transform: true,
      showCheckbox: true,
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
  },
  mounted () {
    this.loadList()
  }
})
</script>
