<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal
      show-footer
      show-confirm-button
      v-model="showPopup"
      :width="600"
      :height="400"
      @confirm="confirmEvent">
      <div>显示确认按钮</div>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const showPopup = ref(false)

const confirmEvent = () => {
  VxeUI.modal.message({
    content: '点击确认'
  })
}
</script>
