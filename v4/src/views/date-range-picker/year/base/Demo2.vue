<template>
  <div>
    <vxe-date-range-picker v-model="val1" type="year"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(['2025-01-01', '2027-01-01'])
</script>
