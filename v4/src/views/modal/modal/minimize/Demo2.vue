<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

let num = 1

const openEvent = () => {
  VxeUI.modal.open({
    title: `标题 ${num}`,
    content: `我是第 ${num} 个`,
    mask: false,
    lockView: false,
    escClosable: true,
    width: 600,
    height: 400,
    showMinimize: true
  })
  num++
}
</script>
