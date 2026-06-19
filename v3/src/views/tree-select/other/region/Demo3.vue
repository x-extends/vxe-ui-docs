<template>
  <div>
    <vxe-tree-select
      multiple
      show-checkbox
      filterable
      clearable
      show-checked-button
      show-clear-button
      show-total-button
      show-close-button
      show-expand-button
      show-full-label
      v-model="val1"
      :options="treeList"
      :treeConfig="treeConfig"
      :option-props="{value: 'id', label: 'name'}">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    const val1 = [1202]
    const treeList: VxeTreeSelectPropTypes.Options = []

    const treeConfig: VxeTreeSelectPropTypes.TreeConfig = {
      trigger: 'node',
      radioConfig: {
        checkMode: 'last'
      }
    }

    return {
      val1,
      treeList,
      treeConfig
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      fetch('https://vxeui.com/resource/json/provinces_list.json').then(res => res.json()).then((data) => {
        this.treeList = XEUtils.toArrayTree(data, { key: 'id', parentKey: 'parentId' })
      })
    }
  }
})
</script>
