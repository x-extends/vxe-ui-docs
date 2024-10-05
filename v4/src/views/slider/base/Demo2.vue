<template>
  <div>
    <vxe-slider v-model="val1" min="10" max="20"></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(15)
</script>
