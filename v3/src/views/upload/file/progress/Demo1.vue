<template>
  <div>
    <vxe-upload v-model="fileList" multiple show-progress :upload-method="uploadMethod"></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = []

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        return {
          ...res.data
        }
      })
    }

    return {
      fileList,
      uploadMethod
    }
  }
})
</script>
