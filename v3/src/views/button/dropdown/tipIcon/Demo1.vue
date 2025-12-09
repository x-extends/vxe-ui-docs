<template>
  <div>
    <vxe-button status="primary" :options="downBtns" :prefix-tooltip="prefixTooltip1">下拉按钮+前缀图标</vxe-button>
    <vxe-button status="primary" :options="downBtns" :suffix-tooltip="suffixTooltip1">下拉按钮+后缀图标</vxe-button>
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

    const prefixTooltip1: VxeButtonPropTypes.PrefixTooltip = {
      content: '提示内容111',
      icon: 'vxe-icon-user-fill'
    }

    const suffixTooltip1: VxeButtonPropTypes.PrefixTooltip = {
      content: '提示内容111',
      icon: 'vxe-icon-user-fill'
    }

    return {
      downBtns,
      prefixTooltip1,
      suffixTooltip1
    }
  }
})
</script>
