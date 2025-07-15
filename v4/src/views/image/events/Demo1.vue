<template>
  <div>
    <vxe-image :src="imgList1" :width="100" @change="changeEvent" @rotate="rotateEvent"></vxe-image>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeImageEvents } from 'vxe-pc-ui'

const imgList1 = ref([
  'https://vxeui.com/resource/img/fj577.jpg',
  'https://vxeui.com/resource/img/fj581.jpeg',
  'https://vxeui.com/resource/img/fj573.jpeg'
])

const changeEvent: VxeImageEvents.Change = ({ url }) => {
  console.log(`切换事件 url=${url}`)
}

const rotateEvent: VxeImageEvents.Rotate = ({ url, rotateValue }) => {
  console.log(`旋转事件 ${rotateValue}度 url=${url}`)
}
</script>
