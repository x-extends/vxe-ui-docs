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
    content: '鼠标可进入，官网地址：<a class="link" href="https://vxeui.com" target="_blank">https://vxeui.com</a>',
    enterable: true,
    useHtml: true
  })
}

const mouseleaveEvent = () => {
  VxeUI.tooltip.close()
}
</script>
