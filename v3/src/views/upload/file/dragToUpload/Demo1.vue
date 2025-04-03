<template>
  <div>
    <span>是否启用：</span>
    <vxe-switch v-model="dragToUpload"></vxe-switch>
    <vxe-upload
      multiple
      v-model="fileList"
      :drag-to-upload="dragToUpload"
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
    const dragToUpload = true

    return {
      fileList,
      dragToUpload
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
