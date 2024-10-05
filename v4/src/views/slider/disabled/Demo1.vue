<template>
  <div>
    <vxe-slider v-model="val1" disabled></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(40)
</script>
