<template>
  <div>
    <vxe-slider v-model="val1" status="primary" readonly></vxe-slider>
    <vxe-slider v-model="val2" status="success" readonly></vxe-slider>
    <vxe-slider v-model="val3" status="info" readonly></vxe-slider>
    <vxe-slider v-model="val4" status="warning" readonly></vxe-slider>
    <vxe-slider v-model="val5" status="error" readonly></vxe-slider>
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
