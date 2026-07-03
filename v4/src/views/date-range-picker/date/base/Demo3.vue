<template>
  <div>
    <vxe-date-range-picker v-model="val1" value-format="timestamp" clearable></vxe-date-range-picker>
    <vxe-date-range-picker v-model="val2" value-format="timestamp" clearable></vxe-date-range-picker>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" value-format="timestamp" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(`${new Date(2025, 9, 10).getTime()},${new Date(2025, 11, 1).getTime()}`)
const val2 = ref([new Date(2025, 9, 10).getTime(), new Date(2025, 11, 1).getTime()])
const startDate = ref(new Date(2025, 9, 10).getTime())
const endDate = ref(new Date(2025, 11, 1).getTime())
</script>
