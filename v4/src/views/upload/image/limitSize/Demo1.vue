<template>
  <div>
    <vxe-upload
      multiple
      show-progress
      show-tip
      v-model="imgList"
      mode="image"
      :limit-count="3"
      :limit-size="1"
      :upload-method="uploadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList = ref([])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/api/pub/upload/single', formData).then((res) => {
    return {
      ...res.data
    }
  })
}
</script>
