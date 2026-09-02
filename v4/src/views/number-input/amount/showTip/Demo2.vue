<template>
  <div>
    <vxe-number-input v-model="val1" type="amount" placeholder="显示中文金额" :tooltip-config="tooltipConfig" show-tooltip clearable></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeNumberInputPropTypes } from 'vxe-pc-ui'
import { amountToChinese } from './demo2.util'

const val1 = ref(null)
const tooltipConfig = reactive<VxeNumberInputPropTypes.TooltipConfig>({
  contentMethod ({ value, label }) {
    return value ? `${label}\n${amountToChinese(value)}` : ''
  }
})
</script>
