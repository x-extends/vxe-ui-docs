<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>

    <vxe-date-range-picker v-model="val1" :readonly="isReadonly"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isReadonly = ref(true)
const val1 = ref('2025-10-01,2025-10-07')
</script>
