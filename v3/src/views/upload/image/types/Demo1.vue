<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :image-types="['png']" multiple :upload-method="uploadMethod"></vxe-upload>
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

    return {
      imgList,
      uploadMethod
    }
  }
})
</script>
