<template>
  <div>
    <p>
      <vxe-button content="info" @click="openAlert('info')"></vxe-button>
      <vxe-button content="warning" @click="openAlert('warning')"></vxe-button>
      <vxe-button content="question" @click="openAlert('question')"></vxe-button>
      <vxe-button content="success" @click="openAlert('success')"></vxe-button>
      <vxe-button content="error" @click="openAlert('error')"></vxe-button>
      <vxe-button content="loading" @click="openAlert('loading')"></vxe-button>
    </p>
    <p>
      <vxe-button content="自定义图标及颜色" @click="openCustomAlert()"></vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeModalPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openAlert (status: VxeModalPropTypes.Status) {
      VxeUI.modal.alert({
        title: '标题1',
        content: `状态 ${status}`,
        status
      })
    },
    openCustomAlert () {
      VxeUI.modal.alert({
        title: '标题2',
        content: '自定义图标',
        iconStatus: 'vxe-icon-delete-fill my-alert-icon-color'
      })
    }
  }
})
</script>

<styles lang="scss">
.my-alert-icon-color {
  color: blue;
}
</styles>
