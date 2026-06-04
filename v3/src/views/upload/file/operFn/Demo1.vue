<template>
  <div>
    <vxe-button status="primary" @click="clearEvent1">清除所有1</vxe-button>
    <vxe-button status="success" @click="clearEvent2">清除所有2</vxe-button>

    <vxe-upload ref="uploadRef" v-model="fileList" multiple>
      <template #option="{ option }">
        <span>文件：{{ option.name }}</span>
        <vxe-button status="error" mode="text" @click="removeEvent1(option)">删除1</vxe-button>
        <vxe-button status="error" mode="text" @click="removeEvent2(option)">删除2</vxe-button>
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
    clearEvent1 () {
      const $upload = this.$refs.uploadRef as VxeUploadInstance
      if ($upload) {
        $upload.clear()
      }
    },
    clearEvent2 () {
      this.fileList = []
    },
    removeEvent1 (option: VxeUploadDefines.FileObjItem) {
      const $upload = this.$refs.uploadRef as VxeUploadInstance
      if ($upload) {
        $upload.remove(option)
      }
    },
    removeEvent2 (option: VxeUploadDefines.FileObjItem) {
      this.fileList = this.fileList.filter(item => item.url !== option.url)
    }
  }
})
</script>
