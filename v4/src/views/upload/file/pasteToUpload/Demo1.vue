<template>
  <div>
    <span>是否启用：</span>
    <vxe-switch v-model="pasteToUpload"></vxe-switch>
    <vxe-upload
      multiple
      v-model="fileList"
      :paste-to-upload="pasteToUpload"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

const fileList = ref([
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])
const pasteToUpload = ref(true)

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/api/pub/upload/single', formData).then((res) => {
    return {
      ...res.data
    }
  })
}
</script>
