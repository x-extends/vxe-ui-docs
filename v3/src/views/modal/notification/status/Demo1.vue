<template>
  <div>
    <p>
      <vxe-button content="info" @click="openNotification('info')"></vxe-button>
      <vxe-button content="warning" @click="openNotification('warning')"></vxe-button>
      <vxe-button content="question" @click="openNotification('question')"></vxe-button>
      <vxe-button content="success" @click="openNotification('success')"></vxe-button>
      <vxe-button content="error" @click="openNotification('error')"></vxe-button>
      <vxe-button content="loading" @click="openNotification('loading')"></vxe-button>
    </p>
    <p>
      <vxe-button content="自定义图标及颜色" @click="openCustomNotification()"></vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeModalPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openNotification  (status: VxeModalPropTypes.Status) {
      VxeUI.modal.notification({
        content: `状态 ${status}`,
        status
      })
    },
    openCustomNotification  () {
      VxeUI.modal.notification({
        content: '自定义图标',
        iconStatus: 'vxe-icon-delete-fill my-notification-icon-color'
      })
    }
  }
})
</script>

<styles lang="scss">
.my-notification-icon-color {
  color: blue;
}
</styles>
