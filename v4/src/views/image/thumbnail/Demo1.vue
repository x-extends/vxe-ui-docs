<template>
  <div>
    <vxe-image :src="imgUrl" :get-thumbnail-url-method="getThumbnailUrlMethod" :width="100"></vxe-image>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeImagePropTypes } from 'vxe-pc-ui'

const imgUrl = ref('https://vxeui.com/resource/img/fj577.jpg')
const getThumbnailUrlMethod: VxeImagePropTypes.GetThumbnailUrlMethod = ({ url }) => {
  // 返回对应预览图片的链接
  return url ? `${url}?w=100&h=100` : url
}
</script>
