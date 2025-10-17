<template>
  <div>
    <vxe-date-picker v-model="val1" value-format="dd/MM/yyyy" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val2" value-format="dd/MM/yyyy" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref('01/01/2025')
</script>
