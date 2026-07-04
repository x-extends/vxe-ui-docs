<template>
  <div>
    <vxe-date-range-picker v-model="val2" value-format="date" clearable></vxe-date-range-picker>
    <div>{{ val2 }}</div>
    <br>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" value-format="date" clearable></vxe-date-range-picker>
    <div>{{ startDate }}</div>
    <div>{{ endDate }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val2 = ref([new Date(2025, 9, 10), new Date(2025, 11, 1)])
const startDate = ref(new Date(2025, 9, 10))
const endDate = ref(new Date(2025, 11, 1))
</script>
