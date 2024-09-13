<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openEvent  () {
      VxeUI.modal.open({
        title: '标题2',
        width: 600,
        height: 400,
        resize: true,
        showZoom: true,
        remember: true,
        slots: {
          default () {
            return <div>记忆功能，会在打开时还原成最后一次操作的状态</div>
          }
        }
      })
    }
  }
})
</script>
