<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" multiple :upload-method="uploadMethod"></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = []

    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file }) => {
      // 模拟后台接口
      return new Promise(resolve => {
        setTimeout(() => {
          // 接收 { url: '' }
          resolve({
            name: file.name,
            url: `${file.name}`
          })
        }, 500)
      })
    }

    return {
      imgList,
      uploadMethod
    }
  }
})
</script>
