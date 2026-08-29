<template>
  <div>
    <vxe-slider v-model="val1" range></vxe-slider>
    <vxe-slider v-model="val2" range></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref([])
const val2 = ref([10, 30])
</script>
