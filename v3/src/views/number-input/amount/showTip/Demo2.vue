<template>
  <div>
    <vxe-number-input v-model="val1" type="amount" placeholder="显示中文金额" :tooltip-config="tooltipConfig" show-tooltip clearable></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeNumberInputPropTypes } from 'vxe-pc-ui'
import { amountToChinese } from './demo2.util'

export default Vue.extend({
  data () {
    const tooltipConfig: VxeNumberInputPropTypes.TooltipConfig = {
      contentMethod ({ value, label }) {
        return value ? `${label}\n${amountToChinese(value)}` : ''
      }
    }

    return {
      val1: null,
      tooltipConfig
    }
  }
})
</script>
