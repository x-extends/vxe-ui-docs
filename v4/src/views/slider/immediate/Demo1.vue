<template>
  <div>
    <div>{{ val1 }}</div>
    <vxe-slider v-model="val1" immediate></vxe-slider>
    <div>{{ val2 }}</div>
    <vxe-slider v-model="val2" :immediate="false"></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(40)
const val2 = ref(40)
</script>
