<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>
    <vxe-input v-model="val1" placeholder="禁用" :disabled="isDisabled"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const isDisabled = ref(true)
</script>
