<template>
  <div>
    <vxe-upload
      multiple
      paste-to-upload
      mode="image"
      v-model="imgList"
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
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' },
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]

    const moreConfig: VxeUploadPropTypes.MoreConfig = {
      maxCount: 1
    }

    return {
      imgList,
      moreConfig
    }
  },
  methods: {
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
        return {
          ...res.data
        }
      })
    }
  }
})
</script>
