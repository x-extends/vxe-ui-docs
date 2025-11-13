<template>
  <div>
    <vxe-upload
      multiple
      show-progress
      v-model="fileList"
      :upload-method="uploadMethod">
      <template #action>
        <vxe-button mode="text" icon="vxe-icon-edit" status="primary"></vxe-button>
        <vxe-button mode="text" icon="vxe-icon-question-circle" status="error"></vxe-button>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

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
