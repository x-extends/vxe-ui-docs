<template>
  <div>
    <p>
      <vxe-button :prefix-tooltip="prefixTooltip1">前缀提示</vxe-button>
      <vxe-button :suffix-tooltip="suffixTooltip1">后缀提示</vxe-button>
    </p>
    <p>
      <vxe-button prefix-icon="vxe-icon-add" :prefix-tooltip="prefixTooltip2">前缀提示</vxe-button>
      <vxe-button prefix-icon="vxe-icon-add" :suffix-tooltip="suffixTooltip2">后缀提示</vxe-button>
    </p>
    <p>
      <vxe-button suffix-icon="vxe-icon-add" :prefix-tooltip="prefixTooltip3">前缀提示</vxe-button>
      <vxe-button suffix-icon="vxe-icon-add" :suffix-tooltip="suffixTooltip3">后缀提示</vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeButtonPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const prefixTooltip1: VxeButtonPropTypes.PrefixTooltip = {
      content: '提示内容111',
      icon: 'vxe-icon-warning-circle-fill'
    }

    const suffixTooltip1: VxeButtonPropTypes.SuffixTooltip = {
      content: '提示内容222',
      icon: 'vxe-icon-warning-triangle-fill'
    }

    const prefixTooltip2: VxeButtonPropTypes.PrefixTooltip = {
      content: '提示内容111',
      icon: 'vxe-icon-warning-circle-fill'
    }

    const suffixTooltip2: VxeButtonPropTypes.SuffixTooltip = {
      content: '提示内容222',
      icon: 'vxe-icon-warning-triangle-fill'
    }

    const prefixTooltip3: VxeButtonPropTypes.PrefixTooltip = {
      content: '点击查看官网：<a href="https://vxetable.cn/" style="color: #ffffff;">vxe-table</a>',
      icon: 'vxe-icon-warning-circle-fill',
      useHTML: true
    }

    const suffixTooltip3: VxeButtonPropTypes.SuffixTooltip = {
      content: '点击查看官网：<a href="https://vxetable.cn/" style="color: #ffffff;">vxe-table</a>',
      icon: 'vxe-icon-warning-triangle-fill',
      useHTML: true
    }

    return {
      prefixTooltip1,
      suffixTooltip1,
      prefixTooltip2,
      suffixTooltip2,
      prefixTooltip3,
      suffixTooltip3
    }
  }
})
</script>
