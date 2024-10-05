<template>
  <div>
    <vxe-slider v-model="val1"></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
</script>
