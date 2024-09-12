<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" url-mode show-progress :upload-method="uploadMethod"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList1 = [
      'https://vxeui.com/resource/img/fj577.jpg'
    ]

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file, updateProgress }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData, {
        onUploadProgress (progressEvent) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 0))
          // 更新进度
          updateProgress(percentCompleted)
        }
      }).then((res) => {
        return {
          ...res.data
        }
      })
    }
    return {
      imgList1,
      uploadMethod
    }
  }
})
</script>
