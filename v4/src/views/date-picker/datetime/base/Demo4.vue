<template>
  <div>
    <vxe-date-picker v-model="val1" type="datetime" value-format="dd/MM/yyyy HH:mm:ss"></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="datetime" value-format="dd/MM/yyyy HH:mm:ss"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref('01/01/2025 12:30:00')
</script>
