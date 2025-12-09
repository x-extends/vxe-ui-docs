<template>
  <div>
    <vxe-button status="primary" :options="downBtns" :prefix-tooltip="prefixTooltip1">下拉按钮+前缀图标</vxe-button>
    <vxe-button status="primary" :options="downBtns" :suffix-tooltip="suffixTooltip1">下拉按钮+后缀图标</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeButtonPropTypes } from 'vxe-pc-ui'

const prefixTooltip1 = reactive<VxeButtonPropTypes.PrefixTooltip>({
  content: '提示内容111',
  icon: 'vxe-icon-user-fill'
})

const suffixTooltip1 = reactive<VxeButtonPropTypes.PrefixTooltip>({
  content: '提示内容111',
  icon: 'vxe-icon-user-fill'
})

const downBtns = ref<VxeButtonPropTypes.Options>([
  { name: '1', content: '下拉按钮1' },
  { name: '2', content: '下拉按钮2' },
  { name: '3', content: '下拉按钮3' }
])
</script>
