<template>
  <div>
    <vxe-tooltip ref="tooltipRef"></vxe-tooltip>
    <button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例1</button>
    <button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例2</button>
    <button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例3</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTooltipInstance } from 'vxe-pc-ui'

const tooltipRef = ref<VxeTooltipInstance>()

const mouseenterEvent = (event) => {
  const $tooltip = tooltipRef.value
  if ($tooltip) {
    $tooltip.open(event.target, '自定义提示内容')
  }
}

const mouseleaveEvent = () => {
  const $tooltip = tooltipRef.value
  if ($tooltip) {
    $tooltip?.close()
  }
}
</script>
