<template>
  <div>
    <vxe-slider v-model="val1"></vxe-slider>
    <vxe-slider v-model="val2" size="medium"></vxe-slider>
    <vxe-slider v-model="val3" size="small"></vxe-slider>
    <vxe-slider v-model="val4" size="mini"></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(10)
const val2 = ref(30)
const val3 = ref(50)
const val4 = ref(70)
</script>
