<template>
  <div>
    <vxe-select v-model="val1" :options="opts1" :loading="loading"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const opts1: VxeSelectPropTypes.Options = []

    return {
      val1: [],
      loading: false,
      opts1
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.opts1 = [
        { value: 1001, label: 'table' },
        { value: 1002, label: 'grid' },
        { value: 1003, label: 'button' },
        { value: 1004, label: 'toolbar' },
        { value: 1005, label: 'tooltip' },
        { value: 1006, label: 'pager' }
      ]
      this.loading = false
    }, 1000)
  }
})
</script>
