<template>
  <div>
    <vxe-switch v-model="isTrim"></vxe-switch>
    <vxe-textarea v-model="val1" placeholder="去掉左右空格" :trim="isTrim"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const isTrim = ref(true)
</script>
