<template>
  <div>
    <vxe-upload
      multiple
      show-progress
      show-error-status
      v-model="imgList"
      mode="image"
      :upload-method="uploadMethod"
      @change="changeEvent"
      @upload-success="uploadSuccessEvent"
      @upload-error="uploadErrorEvent"
      @upload-queue-end="uploadQueueEndEvent">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes, VxeUploadEvents } from 'vxe-pc-ui'

const imgList = ref([])

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

const changeEvent: VxeUploadEvents.Change = () => {
  console.log('change')
}

const uploadSuccessEvent: VxeUploadEvents.UploadSuccess = () => {
  console.log('upload-success')
}

const uploadErrorEvent: VxeUploadEvents.UploadError = () => {
  console.log('upload-error')
}

const uploadQueueEndEvent: VxeUploadEvents.UploadQueueEnd = () => {
  console.log('upload-queue-end')
}
</script>
