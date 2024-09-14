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
      VxeUI.drawer.open({
        title: '标题2',
        width: 1000,
        padding: false,
        slots: {
          default () {
            return <iframe src="https://vxeui.com/iframe/iframe2.html" style="display: block;width: 100%;height: 100%;border: 0;"></iframe>
          }
        }
      })
    }
  }
})
</script>
