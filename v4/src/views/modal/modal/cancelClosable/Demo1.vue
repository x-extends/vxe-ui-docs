<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup"
      title="标题"
      :width="600"
      :height="400"
      :cancel-closable="false">
      <div>点击取消按钮不可关闭</div>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
