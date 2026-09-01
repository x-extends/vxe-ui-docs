<template>
  <div>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">全局提示1</vxe-button>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">全局提示2</vxe-button>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">全局提示3</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI, VxeButtonEvents } from 'vxe-pc-ui'

const mouseenterEvent: VxeButtonEvents.Mouseenter = ({ $event }) => {
  VxeUI.tooltip.open($event.target, {
    content: '提示内容111'
  })
}

const mouseleaveEvent = () => {
  VxeUI.tooltip.close()
}
</script>
