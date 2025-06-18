<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="时" type="time" time-format="HH:mm" label-format="HH:mm" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
