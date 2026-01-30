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
      :before-select-method="beforeSelectMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUI, VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
        return {
          ...res.data
        }
      })
    }

    const beforeSelectMethod: VxeUploadPropTypes.BeforeSelectMethod = ({ file }) => {
      if (!file.name) {
        VxeUI.modal.message({
          content: '文件名为空',
          status: 'error'
        })
        return false
      }
      if (!/png|jpg|jpeg/.test(file.name)) {
        VxeUI.modal.message({
          content: '仅支持 png,jpeg 格式',
          status: 'error'
        })
        return false
      }
      return true
    }

    return {
      fileList,
      uploadMethod,
      beforeSelectMethod
    }
  }
})
</script>
