<template>
  <div>
    <p>
      <vxe-button @click="openNotificationEvent">点击弹出</vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openNotificationEvent  () {
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
  }
})
</script>
