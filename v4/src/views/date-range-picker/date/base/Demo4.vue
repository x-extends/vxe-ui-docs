<template>
  <div>
    <vxe-date-range-picker v-model="val1" value-format="dd/MM/yyyy" clearable></vxe-date-range-picker>
    <vxe-date-range-picker v-model="val2" value-format="dd/MM/yyyy" clearable></vxe-date-range-picker>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" value-format="dd/MM/yyyy" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('10/10/2025,01/12/2025')
const val2 = ref(['10/10/2025', '01/12/2025'])
const startDate = ref('10/10/2025')
const endDate = ref('01/12/2025')
</script>
