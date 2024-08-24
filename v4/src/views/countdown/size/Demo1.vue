<template>
  <div>
    <vxe-countdown v-model="val1"></vxe-countdown>
    <vxe-countdown v-model="val2" size="medium"></vxe-countdown>
    <vxe-countdown v-model="val3" size="small"></vxe-countdown>
    <vxe-countdown v-model="val4" size="mini"></vxe-countdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(20000)
const val2 = ref(30000)
const val3 = ref(40000)
const val4 = ref(50000)
</script>
