<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :limit-count="3" multiple show-progress :upload-method="uploadMethod" show-tip></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = []

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
      imgList,
      uploadMethod
    }
  }
})
</script>
