<template>
  <div>
    <vxe-upload
      show-download-button
      readonly
      mode="image"
      v-model="imgList"
      :download-method="downloadMethod"
      :before-download-method="beforeDownloadMethod">
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = [
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

    const beforeDownloadMethod: VxeUploadPropTypes.BeforeDownloadMethod = ({ option }) => {
      if (option.type === 'jpeg') {
        VxeUI.modal.message({
          content: '不支持下载',
          status: 'error'
        })
        return false
      }
      return true
    }

    return {
      imgList,
      downloadMethod,
      beforeDownloadMethod
    }
  }
})
</script>
