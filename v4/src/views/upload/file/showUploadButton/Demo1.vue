<template>
  <div>
    <vxe-button type="primary" @click="selectEvent">点击上传</vxe-button>
    <vxe-upload
      multiple
      show-progress
      ref="uploadRef"
      v-model="fileList"
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

const fileList = ref([])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/api/pub/upload/single', formData).then((res) => {
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
