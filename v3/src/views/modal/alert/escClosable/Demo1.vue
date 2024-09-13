<template>
  <div>
    <p>
      <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openEvent () {
      VxeUI.modal.alert({
        title: '标题1',
        content: '按 Esc 键可关闭',
        escClosable: true
      })
    }
  }
})
</script>
