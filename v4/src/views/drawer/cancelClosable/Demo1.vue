<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-drawer
      v-model="showPopup"
      show-footer
      show-cancel-button
      show-confirm-button
      title="标题"
      :width="600"
      :cancel-closable="false"
    >
      <div>点击取消按钮不可关闭</div>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
