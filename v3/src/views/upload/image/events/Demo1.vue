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

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = []

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
      imgList,
      uploadMethod
    }
  },
  methods: {
    changeEvent () {
      console.log('change')
    },
    uploadSuccessEvent () {
      console.log('upload-success')
    },
    uploadErrorEvent () {
      console.log('upload-error')
    },
    uploadQueueEndEvent () {
      console.log('upload-queue-end')
    }
  }
})
</script>
