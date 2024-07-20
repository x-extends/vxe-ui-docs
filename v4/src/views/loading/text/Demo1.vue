<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" text="正则加载中，请稍后..."></vxe-loading>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const loading = ref(true)
</script>
