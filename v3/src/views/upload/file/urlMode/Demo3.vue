<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1" url-mode single-mode show-progress :upload-method="uploadMethod"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList1 = 'https://vxeui.com/resource/img/fj577.jpg?name=图片1.jpg'

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
        // { url: '' }
        return {
          ...res.data
        }
      })
    }

    return {
      fileList1,
      uploadMethod
    }
  }
})
</script>
