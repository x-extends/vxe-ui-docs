<template>
  <div>
    <vxe-upload
      show-progress
      multiple
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
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
  { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
    return {
      ...res.data
    }
  })
}

const removeMethod: VxeUploadPropTypes.RemoveMethod = async ({ option }) => {
  if (option.id) {
    // 本地删除的同时，服务端也一起删除
    await axios.delete(`/publicapi/api/pub/delete/${option.id}`)
  }
}
</script>
