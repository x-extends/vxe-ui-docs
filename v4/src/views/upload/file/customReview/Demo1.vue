<template>
  <div>
    <vxe-upload v-model="fileList" :preview-method="previewMethod"></vxe-upload>

    <vxe-modal v-model="showPopup" title="预览" width="400" height="440" resize>
      <template #default>
        <img v-if="selectImg" :src="selectImg" style="width: 100%;height: 100%;" />
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const fileList = ref([
  { name: 'avatar1.jpg', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' }
])

const showPopup = ref(false)
const selectImg = ref('')

const previewMethod: VxeUploadPropTypes.PreviewMethod = ({ option }) => {
  return new Promise<void>((resolve) => {
    showPopup.value = true
    selectImg.value = option.url
    resolve()
  })
}
</script>
