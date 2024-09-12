<template>
  <div>
    <vxe-button type="primary" @click="selectEvent">点击上传</vxe-button>
    <vxe-upload
      multiple
      show-progress
      mode="image"
      ref="uploadRef"
      v-model="imgList"
      :showUploadButton="false"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadInstance, VxeUploadPropTypes } from 'vxe-pc-ui'

const uploadRef = ref<VxeUploadInstance>()

const imgList = ref([])

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

const selectEvent = () => {
  const $upload = uploadRef.value
  if ($upload) {
    $upload.choose()
  }
}
</script>
