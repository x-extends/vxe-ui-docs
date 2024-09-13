<template>
  <div>
    <vxe-button @click="openVerticalEvent">点击弹出</vxe-button>
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
    openVerticalEvent () {
      VxeUI.modal.open({
        title: `标题 ${this.num}`,
        content: `我是第 ${this.num} 个，点击最小化纵向排列`,
        mask: false,
        lockView: false,
        escClosable: true,
        width: 600,
        height: 400,
        showZoom: true,
        zoomConfig: {
          minimizeLayout: 'vertical'
        }
      })
      this.num++
    }
  }
})
</script>
