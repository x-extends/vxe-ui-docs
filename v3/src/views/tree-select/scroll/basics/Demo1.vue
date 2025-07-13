<template>
  <div>
    <vxe-tree-select v-model="val1" v-bind="treeSelectOptions"></vxe-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeSelectProps } from 'vxe-pc-ui'

interface NodeVO {
  name: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const val1 = []
    const treeSelectOptions: VxeTreeSelectProps<NodeVO> = {
      multiple: true,
      showTotalButoon: true,
      showCheckedButoon: true,
      showClearButton: true,
      showExpandButton: true,
      optionProps: {
        label: 'name',
        value: 'id'
      },
      treeConfig: {
        transform: true,
        keyField: 'id',
        parentField: 'parentId'
      },
      options: []
    }

    return {
      val1,
      treeSelectOptions
    }
  },
  methods: {
    loadList () {
      this.treeSelectOptions.loading = true
      fetch('/resource/json/provinces_list.json').then(res => res.json()).then((data: NodeVO[]) => {
        this.treeSelectOptions.loading = false
        this.treeSelectOptions.options = data
      })
    }
  },
  mounted () {
    this.loadList()
  }
})
</script>
