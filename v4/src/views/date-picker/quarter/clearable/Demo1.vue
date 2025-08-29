<template>
  <div>
    <vxe-date-picker v-model="val1" type="quarter" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
