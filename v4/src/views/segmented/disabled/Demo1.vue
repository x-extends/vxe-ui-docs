<template>
  <div>
    <vxe-segmented v-model="val1" :options="optList" disabled></vxe-segmented>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('1')
const optList = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' },
  { label: '选项6', value: '6' },
  { label: '选项7', value: '7' }
]
</script>
