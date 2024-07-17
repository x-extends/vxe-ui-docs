<template>
  <div>
    <vxe-button @click="openVerticalEvent">点击弹出</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

let num = 1

const openVerticalEvent = () => {
  VxeUI.modal.open({
    title: `标题 ${num}`,
    content: `我是第 ${num} 个，点击最小化纵向排列`,
    mask: false,
    lockView: false,
    escClosable: true,
    width: 600,
    height: 400,
    showZoom: true,
    zoomConfig: {
      minimizeLayout: 'vertical'
    }
  })
  num++
}
</script>
