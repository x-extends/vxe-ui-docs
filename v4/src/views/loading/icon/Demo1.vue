<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" icon="vxe-icon-indicator roll"></vxe-loading>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const loading = ref(true)
</script>
