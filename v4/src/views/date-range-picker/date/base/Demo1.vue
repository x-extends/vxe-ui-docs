<template>
  <div>
    <vxe-date-range-picker v-model="val1" clearable></vxe-date-range-picker>
    <div>{{ val1 }}</div>
    <br>
    <vxe-date-range-picker v-model="val2" clearable></vxe-date-range-picker>
    <div>{{ val2 }}</div>
    <br>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" clearable></vxe-date-range-picker>
    <div>{{ startDate }}</div>
    <div>{{ endDate }}</div>
    <br>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('2025-10-10,2025-12-01')
const val2 = ref(['2025-10-10', '2025-12-01'])
const startDate = ref('2025-10-10')
const endDate = ref('2025-12-01')
</script>
