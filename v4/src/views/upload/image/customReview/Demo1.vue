<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :preview-method="previewMethod"></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList = ref([
  { name: 'avatar1.jpg', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' }
])

const previewMethod: VxeUploadPropTypes.PreviewMethod = ({ option }) => {
  return VxeUI.previewImage({
    urlList: [option.url]
  })
}
</script>
