<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :image-types="['png']" multiple :upload-method="uploadMethod"></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList = ref([])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/api/pub/upload/single', formData).then((res) => {
    // { url: '' }
    return {
      ...res.data
    }
  })
}
</script>
