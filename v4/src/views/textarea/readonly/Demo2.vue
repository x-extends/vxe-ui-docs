<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-textarea v-model="val1" :readonly="isReadonly" :auto-size="{ minRows: 2, maxRows: 4 }"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本')
const isReadonly = ref(true)
</script>
