<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :get-thumbnail-url-method="getThumbnailUrlMethod" readonly></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])

const getThumbnailUrlMethod: VxeUploadPropTypes.GetThumbnailUrlMethod = ({ option }) => {
  // 返回自定义缩略图地址
  return `${option.url}?w=100&h=100`
}
</script>
