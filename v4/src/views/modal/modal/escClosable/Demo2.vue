<template>
  <div>
    <p>
      <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

let num = 1

const openEvent = () => {
  VxeUI.modal.open({
    title: '标题',
    content: `我是第 ${num++} 个`,
    mask: false,
    lockView: false,
    escClosable: true,
    width: 600,
    height: 400
  })
}
</script>
