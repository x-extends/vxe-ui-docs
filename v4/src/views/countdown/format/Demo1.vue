<template>
  <div>
    <vxe-countdown v-model="val1" format="HH:mm:ss"></vxe-countdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(400000)
</script>
