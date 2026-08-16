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

const val1 = ref('rgb(255,0,0)')
const val2 = ref('rgba(255,0,0,1)')
const val3 = ref('#ff0000')
const val4 = ref('#ff0000')
</script>
