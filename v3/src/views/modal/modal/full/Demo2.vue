<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      num: 1
    }
  },
  methods: {
    openEvent  () {
      VxeUI.modal.open({
        title: `我是第 ${this.num++} 个`,
        mask: false,
        lockView: false,
        escClosable: true,
        width: 600,
        height: 400,
        showZoom: true,
        resize: true,
        showFooter: true,
        showConfirmButton: true,
        confirmButtonText: '自定义确认',
        showCancelButton: true,
        cancelButtonText: '自定义取消',
        slots: {
          default () {
            return <div>
              <div>支持移动窗口</div>
              <div>支持调整宽高</div>
              <div>支持最大化、最小化</div>
            </div>
          }
        }
      })
    }
  }
})
</script>
