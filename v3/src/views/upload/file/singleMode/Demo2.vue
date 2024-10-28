<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1" single-mode auto-hidden-button show-progress :upload-method="uploadMethod"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList1 = {
      name: 'fj577.jpg',
      url: 'https://vxeui.com/resource/img/fj577.jpg'
    }

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
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
