<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>

    <vxe-date-picker v-model="val1" placeholder="禁用" :disabled="isDisabled"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDisabled = ref(true)
const val1 = ref('')
</script>
