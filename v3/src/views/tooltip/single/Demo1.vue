<template>
  <div>
    <vxe-tooltip ref="tooltipRef"></vxe-tooltip>
    <button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例1</button>
    <button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例2</button>
    <button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例3</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTooltipInstance } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    mouseenterEvent (event) {
      const $tooltip = this.$refs.tooltipRef as VxeTooltipInstance
      if ($tooltip) {
        $tooltip.open(event.target, '自定义提示内容')
      }
    },
    mouseleaveEvent  () {
      const $tooltip = this.$refs.tooltipRef as VxeTooltipInstance
      if ($tooltip) {
        $tooltip?.close()
      }
    }
  }
})
</script>
