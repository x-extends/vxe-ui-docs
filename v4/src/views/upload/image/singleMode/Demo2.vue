<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" single-mode auto-hidden-button show-progress :upload-method="uploadMethod"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList1 = ref({
  name: 'fj577.jpg',
  url: 'https://vxeui.com/resource/img/fj577.jpg'
})

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
    return {
      ...res.data
    }
  })
}
</script>
