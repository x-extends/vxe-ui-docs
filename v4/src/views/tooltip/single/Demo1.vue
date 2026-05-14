<template>
  <div>
    <vxe-tooltip ref="tooltipRef"></vxe-tooltip>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例1</vxe-button>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例2</vxe-button>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">共用一个实例3</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTooltipInstance, VxeButtonEvents } from 'vxe-pc-ui'

const tooltipRef = ref<VxeTooltipInstance>()

const mouseenterEvent: VxeButtonEvents.Mouseenter = ({ $event }) => {
  const $tooltip = tooltipRef.value
  if ($tooltip) {
    $tooltip.open($event.target, '自定义提示内容')
  }
}

const mouseleaveEvent: VxeButtonEvents.Mouseleave = () => {
  const $tooltip = tooltipRef.value
  if ($tooltip) {
    $tooltip?.close()
  }
}
</script>
