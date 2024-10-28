<template>
  <div>
    <vxe-button type="primary" @click="selectEvent">点击上传</vxe-button>
    <vxe-upload
      multiple
      show-progress
      ref="uploadRef"
      v-model="fileList"
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
