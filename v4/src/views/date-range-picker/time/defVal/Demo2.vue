<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" placeholder="面板默认值" type="time" default-time="08:30:00,12:30:00"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')
</script>
