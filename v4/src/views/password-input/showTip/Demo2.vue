<template>
  <div>
    <vxe-password-input v-model="val1" placeholder="实时显示工具提示" :tooltip-config="tooltipConfig" show-tooltip clearable></vxe-password-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const tooltipConfig = reactive<VxeNumberInputPropTypes.TooltipConfig>({
  contentMethod ({ value }) {
    return value ? `密码：${value}` : ''
  }
})
</script>
