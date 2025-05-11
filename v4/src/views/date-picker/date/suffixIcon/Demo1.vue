<template>
  <div>
    <vxe-date-picker v-model="val1" suffix-icon="vxe-icon-lock-fill" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
