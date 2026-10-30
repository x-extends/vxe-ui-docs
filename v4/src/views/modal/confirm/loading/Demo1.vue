<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-modal
      v-model="showPopup"
      show-footer
      show-cancel-button
      show-confirm-button
      type="confirm"
      status="warning"
      :loading="loading"
      :height="160"
    >
      <template #default>
        <div>显示加载中11</div>
        <div>显示加载中22</div>
      </template>
    </vxe-modal>
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
