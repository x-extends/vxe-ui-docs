<template>
  <div>
    <vxe-button status="primary" @click="submitEvent">点击手动上传</vxe-button>

    <vxe-upload
      multiple
      show-progress
      show-submit-button
      show-error-status
      v-model="fileList"
      ref="refUpload"
      mode="image"
      :auto-submit="false"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes, VxeUploadInstance } from 'vxe-pc-ui'

const refUpload = ref<VxeUploadInstance>()

const fileList = ref([])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file, updateProgress }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/publicapi/api/pub/upload/single?randomError=1', formData, {
    onUploadProgress (progressEvent) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 0))
      updateProgress(percentCompleted)
    }
  }).then((res) => {
    return {
      ...res.data
    }
  })
}

const submitEvent = () => {
  const $upload = refUpload.value
  if ($upload) {
    $upload.submit(true)
  }
}
</script>
