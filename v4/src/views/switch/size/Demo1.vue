<template>
  <div>
    <vxe-switch v-model="val1" size="xlarge"></vxe-switch>
    <vxe-switch v-model="val2" size="large"></vxe-switch>
    <vxe-switch v-model="val3"></vxe-switch>
    <vxe-switch v-model="val4" size="medium"></vxe-switch>
    <vxe-switch v-model="val5" size="small"></vxe-switch>
    <vxe-switch v-model="val6" size="mini"></vxe-switch>
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
