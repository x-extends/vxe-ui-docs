<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-drawer
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup"
      :width="600"
      :loading="loading">
      <div>显示加载中</div>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
const loading = ref(false)

const openEvent = () => {
  showPopup.value = true
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>
