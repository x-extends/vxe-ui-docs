<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>
    <vxe-textarea v-model="val1" placeholder="禁用" :disabled="isDisabled"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本')
const isDisabled = ref(true)
</script>
