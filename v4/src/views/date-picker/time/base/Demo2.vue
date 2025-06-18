<template>
  <div>
    <vxe-date-picker v-model="val1" type="time" value-format="date" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="time" value-format="date" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(new Date())
</script>
