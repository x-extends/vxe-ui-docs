<template>
  <div>
    <vxe-switch v-model="pasteToUpload"></vxe-switch>
    <vxe-upload
      multiple
      mode="image"
      v-model="imgList"
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
    const imgList = [
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const pasteToUpload = true

    return {
      imgList,
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
