<template>
  <div>
    <vxe-button type="primary" @click="selectEvent">点击上传</vxe-button>
    <vxe-upload
      multiple
      show-progress
      mode="image"
      ref="uploadRef"
      v-model="imgList"
      :showUploadButton="false"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadInstance, VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = []

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
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
    selectEvent  () {
      const $upload = this.$refs.uploadRef as VxeUploadInstance
      if ($upload) {
        $upload.choose()
      }
    }
  }
})
</script>
