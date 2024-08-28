<template>
  <div>
    <vxe-upload
      show-progress
      multiple
      mode="image"
      v-model="fileList"
      :limit-count="6"
      :limit-size="5"
      :upload-method="uploadMethod"
      :remove-method="removeMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const fileList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
])

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

const removeMethod: VxeUploadPropTypes.RemoveMethod = async ({ option }) => {
  if (option.id) {
    // 本地删除的同时，服务端也一起删除
    await axios.delete(`/api/pub/delete/${option.id}`)
  }
}
</script>
