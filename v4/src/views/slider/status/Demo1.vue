<template>
  <div>
    <vxe-slider v-model="val1" status="primary"></vxe-slider>
    <vxe-slider v-model="val2" status="success"></vxe-slider>
    <vxe-slider v-model="val3" status="info"></vxe-slider>
    <vxe-slider v-model="val4" status="warning"></vxe-slider>
    <vxe-slider v-model="val5" status="error"></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(10)
const val2 = ref(30)
const val3 = ref(50)
const val4 = ref(70)
const val5 = ref(90)
</script>
