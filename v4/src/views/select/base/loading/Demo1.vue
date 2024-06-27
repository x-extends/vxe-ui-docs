<template>
  <div>
    <vxe-select v-model="val1" placeholder="加载中" :loading="loading">
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2"></vxe-option>
      <vxe-option value="3" label="选项3"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const loading = ref(false)

loading.value = true
setTimeout(() => {
  loading.value = false
}, 1000)
</script>
