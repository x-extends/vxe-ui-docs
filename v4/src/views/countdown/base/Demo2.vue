<template>
  <div>
    <vxe-countdown v-model="val1"></vxe-countdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(1500000)
</script>
