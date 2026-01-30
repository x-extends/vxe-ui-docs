<template>
  <div>
    <vxe-button status="primary" @click="submitEvent">点击手动上传</vxe-button>

    <vxe-upload
      multiple
      show-progress
      show-submit-button
      show-error-status
      v-model="fileList"
      ref="refUpload"
      mode="image"
      :auto-submit="false"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes, VxeUploadInstance } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = []

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

    return {
      fileList,
      uploadMethod
    }
  },
  methods: {
    submitEvent () {
      const $upload = this.$refs.refUpload as VxeUploadInstance
      if ($upload) {
        $upload.submit(true)
      }
    }
  }
})
</script>
