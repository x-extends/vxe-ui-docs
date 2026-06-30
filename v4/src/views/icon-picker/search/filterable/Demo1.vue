<template>
  <div>
    <vxe-icon-picker v-model="val1" show-icon-title filterable clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
