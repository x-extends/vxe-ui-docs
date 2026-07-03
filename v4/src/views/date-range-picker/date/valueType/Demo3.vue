<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startDate = ref('2025-10-10')
const endDate = ref('2025-12-01')
</script>
