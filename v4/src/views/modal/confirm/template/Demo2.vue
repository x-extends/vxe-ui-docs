<template>
  <div>
    <vxe-button content="自定义JSX模板" @click="openSlotConfirm()"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openSlotConfirm = () => {
  VxeUI.modal.confirm({
    title: '标题',
    slots: {
      default () {
        return <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      }
    }
  })
}
</script>
