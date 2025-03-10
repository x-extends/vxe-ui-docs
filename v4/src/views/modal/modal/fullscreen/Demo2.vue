<template>
  <div>
    <vxe-button content="全屏弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

let num = 1

const openEvent = () => {
  VxeUI.modal.open({
    title: '标题',
    content: `全屏展示 ${num}`,
    mask: false,
    lockView: false,
    escClosable: true,
    fullscreen: true,
    showZoom: true
  })
  num++
}
</script>
