<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const openEvent = () => {
  VxeUI.drawer.open({
    showFooter: true,
    showCancelButton: true,
    showConfirmButton: true,
    useHtml: true,
    width: 600,
    content: '<div style="color: red;">内容11111111111111111</div><div><a href="https://vxeui.com" style="color: #409eff">点击查看官网</a></div>'
  })
}
</script>
