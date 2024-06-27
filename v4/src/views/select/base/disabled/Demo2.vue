<template>
  <div>
    <vxe-select v-model="val1" placeholder="禁用状态">
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2" disabled></vxe-option>
      <vxe-option value="3" label="选项3"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
</script>
