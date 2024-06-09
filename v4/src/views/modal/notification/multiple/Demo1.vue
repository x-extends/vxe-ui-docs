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
  VxeUI.modal.notification({
    id: 'myUniqueNotification',
    content: '同一时刻只会弹出一个',
    status: 'success'
  })
}
</script>
