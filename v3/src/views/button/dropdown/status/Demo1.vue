<template>
  <div>
    <vxe-button status="primary" :options="downBtns">下拉按钮</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeButtonPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const downBtns: VxeButtonPropTypes.Options = [
      { name: '1', content: '下拉按钮1', status: 'warning' },
      { name: '2', content: '下拉按钮2', status: 'error' },
      { name: '3', content: '下拉按钮3' }
    ]

    return {
      downBtns
    }
  }
})
</script>
