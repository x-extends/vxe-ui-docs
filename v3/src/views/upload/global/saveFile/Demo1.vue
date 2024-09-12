<template>
  <div>
    <p>
      <vxe-button @click="saveFile1Event">保存并下载</vxe-button>
      <vxe-button @click="saveFile2Event">下载文件流</vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    saveFile1Event () {
      VxeUI.saveFile({
        filename: '文件名',
        type: 'html',
        content: '<div style="color:red;">内容</div>'
      })
    },
    saveFile2Event  () {
      fetch('https://api.vxetable.cn/demo/resource/upload/255dcdd22bbec527be66b7a14b59c238')
        .then(response => response.blob())
        .then(blob => {
          VxeUI.saveFile({
            filename: '文件名',
            content: blob
          })
        })
    }
  }
})
</script>
