<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-drawer
      show-footer
      show-cancel-button
      show-confirm-button
      preload
      v-model="showPopup"
      :width="600">
      <template #default>
        <div>默认就会被加载 {{ myContent }}</div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const showPopup = ref(false)

const myContent = computed(() => {
  console.log('立即加载 - 弹窗内容')
  return '弹窗内容'
})

const openEvent = () => {
  showPopup.value = true
}
</script>
