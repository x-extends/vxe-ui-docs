<template>
  <div>
    <p>
      <vxe-button @click="openNotificationEvent">点击弹出</vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openNotificationEvent = () => {
  VxeUI.modal.notification({
    content: '带操作按钮',
    status: 'question',
    showFooter: true,
    showConfirmButton: true,
    confirmButtonText: '点击跳转'
  }).then(type => {
    if (type === 'confirm') {
      open('https://vxetable.cn/pluginDocs/table/')
    }
  })
}
</script>
