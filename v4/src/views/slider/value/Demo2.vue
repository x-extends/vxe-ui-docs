<template>
  <div>
    <vxe-slider v-model:start-value="startNum1" v-model:end-value="endNum1" range></vxe-slider>
    <vxe-slider v-model:start-value="startNum2" v-model:end-value="endNum2" range></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startNum1 = ref(0)
const endNum1 = ref(0)

const startNum2 = ref(30)
const endNum2 = ref(70)
</script>
