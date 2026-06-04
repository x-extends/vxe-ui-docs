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

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadInstance, VxeUploadDefines } from 'vxe-pc-ui'

const uploadRef = ref<VxeUploadInstance>()

const fileList = ref([
  { name: 'fj579.png', url: 'https://vxeui.com/resource/img/fj579.png' },
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
])

const clearEvent1 = () => {
  const $upload = uploadRef.value
  if ($upload) {
    $upload.clear()
  }
}

const clearEvent2 = () => {
  fileList.value = []
}

const removeEvent1 = (option: VxeUploadDefines.FileObjItem) => {
  const $upload = uploadRef.value
  if ($upload) {
    $upload.remove(option)
  }
}

const removeEvent2 = (option: VxeUploadDefines.FileObjItem) => {
  fileList.value = fileList.value.filter(item => item.url !== option.url)
}
</script>
