<template>
  <div>
    <vxe-upload
      show-progress
      multiple
      v-model="fileList"
      :limit-count="6"
      :limit-size="5"
      :upload-method="uploadMethod"
      :remove-method="removeMethod"
      :before-remove-method="beforeRemoveMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUI, VxeUploadPropTypes } from 'vxe-pc-ui'

const fileList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/api/pub/upload/single', formData).then((res) => {
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

const beforeRemoveMethod: VxeUploadPropTypes.BeforeRemoveMethod = ({ option }) => {
  if (option.type === 'jpeg') {
    VxeUI.modal.message({
      content: '不允许删除',
      status: 'error'
    })
    return false
  }
  return true
}
</script>
