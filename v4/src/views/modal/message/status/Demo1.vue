<template>
  <div>
    <p>
      <vxe-button content="info" @click="openMessage('info')"></vxe-button>
      <vxe-button content="warning" @click="openMessage('warning')"></vxe-button>
      <vxe-button content="question" @click="openMessage('question')"></vxe-button>
      <vxe-button content="success" @click="openMessage('success')"></vxe-button>
      <vxe-button content="error" @click="openMessage('error')"></vxe-button>
      <vxe-button content="loading" @click="openMessage('loading')"></vxe-button>
    </p>
    <p>
      <vxe-button content="自定义图标及颜色" @click="openCustomMessage()"></vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI, VxeModalPropTypes } from 'vxe-pc-ui'

const openMessage = (status: VxeModalPropTypes.Status) => {
  VxeUI.modal.message({
    content: `状态 ${status}`,
    status
  })
}

const openCustomMessage = () => {
  VxeUI.modal.message({
    content: '自定义图标',
    iconStatus: 'vxe-icon-delete-fill my-message-icon-color'
  })
}
</script>

<style lang="scss">
.my-message-icon-color {
  color: blue;
}
</style>
