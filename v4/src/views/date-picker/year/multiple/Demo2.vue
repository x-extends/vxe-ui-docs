<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="年份多选" type="year" limit-count="2" clearable multiple></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
