<template>
  <div>
    <vxe-slider v-model="val1" range></vxe-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref([10, 60])
</script>
