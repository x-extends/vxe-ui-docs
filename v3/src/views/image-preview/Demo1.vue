<template>
  <div>
    <vxe-button status="primary" @click="clickEvent">点击预览图片</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    clickEvent () {
      VxeUI.previewImage({
        activeIndex: 1,
        urlList: [
          'https://vxeui.com/resource/img/fj573.jpeg',
          'https://vxeui.com/resource/img/fj562.png',
          'https://vxeui.com/resource/img/fj187.jpg'
        ]
      })
    }
  }
})
</script>
