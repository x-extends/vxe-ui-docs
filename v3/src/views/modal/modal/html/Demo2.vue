<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openEvent () {
      VxeUI.modal.open({
        width: 600,
        height: 400,
        content: '<div style="color: red;">内容11111111111111111</div><div><a href="https://vxeui.com" style="color: #409eff">点击查看官网</a></div>',
        useHtml: true
      })
    }
  }
})
</script>
