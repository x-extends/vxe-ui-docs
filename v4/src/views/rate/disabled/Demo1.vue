<template>
  <div>
    <vxe-rate v-model="val1" disabled></vxe-rate>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(2)
</script>
