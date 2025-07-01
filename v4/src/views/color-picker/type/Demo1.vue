<template>
  <div>
    <vxe-color-picker v-model="val1" type="rgb" clearable></vxe-color-picker>
    <vxe-color-picker v-model="val2" type="rgb" clearable></vxe-color-picker>
    <vxe-color-picker v-model="val3" type="rgb" clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('rgb(220, 20, 60)')
const val3 = ref('rgb(0, 0, 139, 0.8)')
</script>
