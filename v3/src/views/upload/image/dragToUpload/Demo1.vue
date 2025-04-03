<template>
  <div>
    <vxe-switch v-model="dragToUpload"></vxe-switch>
    <vxe-upload
      multiple
      mode="image"
      v-model="imgList"
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
    const imgList = [
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    const dragToUpload = true

    return {
      imgList,
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
