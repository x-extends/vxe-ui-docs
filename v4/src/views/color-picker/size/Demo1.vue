<template>
  <div>
    <vxe-color-picker v-model="val1"></vxe-color-picker>
    <vxe-color-picker v-model="val2" size="medium"></vxe-color-picker>
    <vxe-color-picker v-model="val3" size="small"></vxe-color-picker>
    <vxe-color-picker v-model="val4" size="mini"></vxe-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>
