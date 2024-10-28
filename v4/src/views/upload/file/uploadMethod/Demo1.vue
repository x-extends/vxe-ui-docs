<template>
  <div>
    <vxe-upload v-model="fileList" multiple :upload-method="uploadMethod"></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const fileList = ref([])

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
</script>
