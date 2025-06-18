<template>
  <div>
    <vxe-date-picker v-model="val1" type="time" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="time" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('10:10:30')
</script>
