<template>
  <div>
    <vxe-upload
      multiple
      v-model="imgList"
      mode="image"
      :more-config="moreConfig"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const moreConfig: VxeUploadPropTypes.MoreConfig = {
      maxCount: 0
    }

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
      moreConfig,
      uploadMethod
    }
  }
})
</script>
