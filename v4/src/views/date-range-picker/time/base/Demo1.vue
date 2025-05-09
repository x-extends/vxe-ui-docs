<template>
  <div>
    <vxe-date-range-picker v-model="val1" type="time"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('10:30:10,12:20:30')
</script>
