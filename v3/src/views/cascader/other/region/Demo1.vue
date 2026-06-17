<template>
  <div>
    <vxe-cascader v-model="val1" :options="treeList" :option-props="{value: 'id', label: 'name'}" filterable clearable></vxe-cascader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeCascaderPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    const val1 = 1202
    const treeList: VxeCascaderPropTypes.Options = []

    return {
      val1,
      treeList
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
