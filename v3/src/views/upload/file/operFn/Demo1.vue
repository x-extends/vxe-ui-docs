<template>
  <div>
    <vxe-button status="primary" @click="clearEvent">清除</vxe-button>

    <vxe-upload ref="uploadRef" v-model="fileList">
      <template #option="{ option }">
        <span>文件：{{ option.name }}</span>
        <vxe-button status="error" mode="text" @click="removeEvent(option)">删除</vxe-button>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUploadInstance, VxeUploadDefines } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]

    return {
      fileList
    }
  },
  methods: {
    clearEvent () {
      const $upload = this.$refs.uploadRef as VxeUploadInstance
      if ($upload) {
        $upload.clear()
      }
    },
    removeEvent (option: VxeUploadDefines.FileObjItem) {
      const $upload = this.$refs.uploadRef as VxeUploadInstance
      if ($upload) {
        $upload.remove(option)
      }
    }
  }
})
</script>
