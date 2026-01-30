<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1" url-mode url-args show-progress :upload-method="uploadMethod"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const fileList1 = ref([
  'https://vxeui.com/resource/img/fj577.jpg'
])

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
    // { url: 'https://xxx' } 当设置 url-args 后会自动拼接 https://xxx?name=ooo ，也可以自行拼接
    return {
      ...res.data
    }
  })
}
</script>
