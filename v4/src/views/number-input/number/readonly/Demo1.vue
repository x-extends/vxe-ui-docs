<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-number-input v-model="val1" :readonly="isReadonly"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(123)
const isReadonly = ref(true)
</script>
