<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="日期和时间选择" type="datetime" transfer></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
