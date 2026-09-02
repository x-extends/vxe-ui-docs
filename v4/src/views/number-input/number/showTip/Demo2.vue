<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="实时显示工具提示" :tooltip-config="tooltipConfig" show-tooltip clearable></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref(null)
const tooltipConfig = reactive<VxeNumberInputPropTypes.TooltipConfig>({
  contentMethod ({ value }) {
    return value ? `金额：${value}元` : ''
  }
})
</script>
