<template>
  <div>
    <p>
      <vxe-button mode="text" :prefix-tooltip="prefixTooltip1">前缀提示</vxe-button>
      <vxe-button mode="text" :suffix-tooltip="suffixTooltip1">后缀提示</vxe-button>
    </p>
    <p>
      <vxe-button mode="text" prefix-icon="vxe-icon-add" :prefix-tooltip="prefixTooltip2">前缀提示</vxe-button>
      <vxe-button mode="text" prefix-icon="vxe-icon-add" :suffix-tooltip="suffixTooltip2">后缀提示</vxe-button>
    </p>
    <p>
      <vxe-button mode="text" suffix-icon="vxe-icon-add" :prefix-tooltip="prefixTooltip3">前缀提示</vxe-button>
      <vxe-button mode="text" suffix-icon="vxe-icon-add" :suffix-tooltip="suffixTooltip3">后缀提示</vxe-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeButtonPropTypes } from 'vxe-pc-ui'

const prefixTooltip1 = reactive<VxeButtonPropTypes.PrefixTooltip>({
  content: '提示内容111',
  icon: 'vxe-icon-warning-circle-fill'
})

const suffixTooltip1 = reactive<VxeButtonPropTypes.SuffixTooltip>({
  content: '提示内容222',
  icon: 'vxe-icon-warning-triangle-fill'
})

const prefixTooltip2 = reactive<VxeButtonPropTypes.PrefixTooltip>({
  content: '提示内容111',
  icon: 'vxe-icon-warning-circle-fill'
})

const suffixTooltip2 = reactive<VxeButtonPropTypes.SuffixTooltip>({
  content: '提示内容222',
  icon: 'vxe-icon-warning-triangle-fill'
})

const prefixTooltip3 = reactive<VxeButtonPropTypes.PrefixTooltip>({
  content: '点击查看官网：<a href="https://vxetable.cn/" style="color: #ffffff;">vxe-table</a>',
  icon: 'vxe-icon-warning-circle-fill',
  useHTML: true
})

const suffixTooltip3 = reactive<VxeButtonPropTypes.SuffixTooltip>({
  content: '点击查看官网：<a href="https://vxetable.cn/" style="color: #ffffff;">vxe-table</a>',
  icon: 'vxe-icon-warning-triangle-fill',
  useHTML: true
})
</script>
