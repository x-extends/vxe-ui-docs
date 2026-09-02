<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="实时显示工具提示" :tooltip-config="tooltipConfig" show-tooltip clearable></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeNumberInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const tooltipConfig: VxeNumberInputPropTypes.TooltipConfig = {
      contentMethod ({ value }) {
        return value ? `金额：${value}元` : ''
      }
    }

    return {
      val1: null,
      tooltipConfig
    }
  }
})
</script>
