<template>
  <div>
    <vxe-color-picker v-model="val1" clearable></vxe-color-picker>
    <vxe-color-picker v-model="val2" clearable></vxe-color-picker>
    <vxe-color-picker v-model="val3" clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('#00FFFF')
const val3 = ref('#00ffffcc')
</script>
