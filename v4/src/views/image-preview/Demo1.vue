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
      'https://vxeui.com/resource/img/fj573.jpeg',
      'https://vxeui.com/resource/img/fj562.png',
      'https://vxeui.com/resource/img/fj187.jpg'
    ],
    events: {
      change ({ url }) {
        console.log(`切换事件 url=${url}`)
      },
      rotate ({ url, rotateValue }) {
        console.log(`旋转事件 ${rotateValue}度 url=${url}`)
      }
    }
  })
}
</script>
