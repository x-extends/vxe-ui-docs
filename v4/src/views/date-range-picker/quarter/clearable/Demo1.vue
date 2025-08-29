<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="quarter" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')
</script>
