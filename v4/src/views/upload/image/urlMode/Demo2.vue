<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" url-mode multiple show-progress :upload-method="uploadMethod"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList1 = ref([
  'https://vxeui.com/resource/img/fj577.jpg?name=图片1.jpg'
])

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
