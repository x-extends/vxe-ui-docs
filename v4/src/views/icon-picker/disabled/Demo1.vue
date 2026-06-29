<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>
    <vxe-icon-picker v-model="val1" :disabled="isDisabled"></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDisabled = ref(false)
const val1 = ref('')
</script>
