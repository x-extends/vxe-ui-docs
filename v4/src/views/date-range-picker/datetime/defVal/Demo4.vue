<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" placeholder="面板默认日期和时间值" type="datetime" default-date="2014-01-01,2015-01-01" default-time="08:30:00,12:30:00"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')
</script>
