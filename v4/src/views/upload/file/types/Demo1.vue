<template>
  <div>
    <vxe-upload v-model="fileList" multiple :file-types="['pdf', 'xlsx']" :upload-method="uploadMethod"></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const fileList = ref([])

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
