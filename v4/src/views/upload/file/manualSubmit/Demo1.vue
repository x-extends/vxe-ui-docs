<template>
  <div>
    <vxe-button status="primary" @click="submitEvent">点击手动上传</vxe-button>

    <vxe-upload
      multiple
      show-progress
      v-model="fileList"
      ref="refUpload"
      button-text="选择文件或拖拽到此"
      :auto-submit="false"
      :limit-count="9"
      :limit-size="50"
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
  return axios.post('/api/pub/upload/single', formData, {
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
    $upload.submit()
  }
}
</script>
