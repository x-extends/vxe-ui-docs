<template>
  <div>
    <vxe-color-picker v-model="val1" type="hex" :show-alpha="false" clearable></vxe-color-picker>
    <div>{{ val1 }}</div>
    <vxe-color-picker v-model="val2" type="hex" :show-alpha="false" clearable></vxe-color-picker>
    <div>{{ val2 }}</div>
    <vxe-color-picker v-model="val3" type="hex" show-alpha clearable></vxe-color-picker>
    <div>{{ val3 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('#00FFFF')
const val3 = ref('#00ffffcc')
</script>
