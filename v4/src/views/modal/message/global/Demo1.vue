<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openEvent = () => {
  VxeUI.modal.message({
    content: '我是消息框'
  }).then(type => {
    console.log(`操作类型 ${type}`)
  })
}
</script>
