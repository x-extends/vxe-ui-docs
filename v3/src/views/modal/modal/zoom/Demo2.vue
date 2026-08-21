<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
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
        title: `标题 ${this.num}`,
        content: `我是第 ${this.num} 个`,
        mask: false,
        lockView: false,
        escClosable: true,
        width: 600,
        height: 400,
        showMaximize: true
      })
      this.num++
    }
  }
})
</script>
