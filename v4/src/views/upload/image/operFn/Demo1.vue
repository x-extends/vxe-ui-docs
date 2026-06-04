<template>
  <div>
    <vxe-button status="primary" @click="clearEvent">清除</vxe-button>

    <vxe-upload ref="uploadRef" v-model="imgList" mode="image">
      <template #option="{ option }">
        <img :src="option.url" style="width: 20px;height: 20px;" />
        <vxe-button status="error" mode="text" @click="removeEvent(option)">删除</vxe-button>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadInstance, VxeUploadDefines } from 'vxe-pc-ui'

const uploadRef = ref<VxeUploadInstance>()

const imgList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
])

const clearEvent = () => {
  const $upload = uploadRef.value
  if ($upload) {
    $upload.clear()
  }
}

const removeEvent = (option: VxeUploadDefines.FileObjItem) => {
  const $upload = uploadRef.value
  if ($upload) {
    $upload.remove(option)
  }
}
</script>
