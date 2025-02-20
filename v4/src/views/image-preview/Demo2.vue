<template>
  <div>
    <vxe-button status="primary" @click="clickEvent">点击预览图片</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const clickEvent = () => {
  VxeUI.previewImage({
    activeIndex: 1,
    urlList: [
      { url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { url: 'https://vxeui.com/resource/img/fj562.png' },
      { url: 'https://vxeui.com/resource/img/fj187.jpg' }
    ]
  })
}
</script>
