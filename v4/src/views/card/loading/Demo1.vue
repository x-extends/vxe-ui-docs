<template>
  <div>
    <p>
      <vxe-card title="标题" :loading="loading" :height="200" :width="300"></vxe-card>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)

loading.value = true
setTimeout(() => {
  loading.value = false
}, 3000)
</script>
