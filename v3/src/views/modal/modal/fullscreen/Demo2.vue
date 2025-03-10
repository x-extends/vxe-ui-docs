<template>
  <div>
    <vxe-button content="全屏弹出" @click="openEvent"></vxe-button>
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
    openEvent () {
      VxeUI.modal.open({
        title: '标题',
        content: `全屏展示 ${this.num}`,
        mask: false,
        lockView: false,
        escClosable: true,
        fullscreen: true,
        showZoom: true
      })
      this.num++
    }
  }
})
</script>
