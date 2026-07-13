<template>
  <div>
    <vxe-checkbox v-model="val1" size="xlarge">特大尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val2" size="large">大型尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val3">默认尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val4" size="medium">中等尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val5" size="small">小型尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val6" size="mini">超小尺寸</vxe-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(false)
const val2 = ref(false)
const val3 = ref(false)
const val4 = ref(false)
const val5 = ref(false)
const val6 = ref(false)
</script>
