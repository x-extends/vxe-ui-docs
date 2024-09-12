<template>
  <div>
    <vxe-upload
      show-download-button
      readonly
      v-model="fileList"
      :download-method="downloadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const downloadMethod: VxeUploadPropTypes.DownloadMethod = async ({ option }) => {
      try {
        const blob = await fetch(option.url).then(response => response.blob())
        await VxeUI.saveFile({
          filename: option.name,
          content: blob
        })
        VxeUI.modal.message({
          content: '下载成功',
          status: 'success'
        })
      } catch (e) {
        VxeUI.modal.message({
          content: '下载失败',
          status: 'error'
        })
        console.error(e)
      }
    }
    return {
      fileList,
      downloadMethod
    }
  }
})
</script>
