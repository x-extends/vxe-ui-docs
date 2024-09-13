<template>
  <div>
    <vxe-button content="打开提示框" @click="openAlert('myAlert1')"></vxe-button>
    <vxe-button content="手动关闭" @click="closeAlert('myAlert1')"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openAlert  (id: string) {
      VxeUI.modal.alert({
        id,
        content: '如果需要手动关闭，通过传id来实现',
        status: 'loading',
        lockView: false,
        mask: false,
        showClose: false,
        showConfirmButton: false
      }).then(type => {
        console.log(`操作类型 ${type}`)
      })
    },
    closeAlert  (id: string) {
      VxeUI.modal.close(id)
    }
  }
})
</script>
