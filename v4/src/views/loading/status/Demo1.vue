<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading"></vxe-loading>
    </div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" status="primary"></vxe-loading>
    </div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" status="success"></vxe-loading>
    </div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" status="info"></vxe-loading>
    </div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" status="warning"></vxe-loading>
    </div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" status="error"></vxe-loading>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const loading = ref(true)
</script>
