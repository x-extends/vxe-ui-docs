<template>
  <div>
    <p>
      <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openEvent = () => {
  VxeUI.modal.confirm({
    title: '标题1',
    content: '我是确认框'
  }).then(type => {
    console.log(`操作类型 ${type}`)
  })
}
</script>
