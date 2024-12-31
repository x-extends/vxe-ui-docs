<template>
  <div>
    <vxe-select v-model="val1" placeholder="默认最后一条" :loading="loading" :default-config="{selectMode: 'last'}">
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const opts1: VxeSelectPropTypes.Options = []

    return {
      val1: null,
      loading: false,
      opts1
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.opts1 = [
        { value: 1001, label: 'table' },
        { value: 1002, label: 'grid' },
        { value: 1003, label: 'button' },
        { value: 1004, label: 'toolbar' },
        { value: 1005, label: 'tooltip' },
        { value: 1006, label: 'pager' },
        { value: 1007, label: 'print' },
        { value: 1008, label: 'export' },
        { value: 1009, label: 'import' },
        { value: 1010, label: 'select' },
        { value: 1012, label: 'checkbox' },
        { value: 1013, label: 'group' }
      ]
    }, 500)
  }
})
</script>
