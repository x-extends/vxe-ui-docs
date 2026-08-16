<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-password-input v-model="val1" :readonly="isReadonly"></vxe-password-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('abc123456')
const isReadonly = ref(true)
</script>
