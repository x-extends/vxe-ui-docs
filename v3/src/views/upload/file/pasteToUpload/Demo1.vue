<template>
  <div>
    <span>是否启用：</span>
    <vxe-switch v-model="pasteToUpload"></vxe-switch>
    <vxe-upload
      multiple
      v-model="fileList"
      :paste-to-upload="pasteToUpload"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    const pasteToUpload = true

    return {
      fileList,
      pasteToUpload
    }
  },
  methods: {
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        return {
          ...res.data
        }
      })
    }
  }
})
</script>
