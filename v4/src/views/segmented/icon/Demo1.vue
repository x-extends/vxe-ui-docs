<template>
  <div>
    <vxe-segmented v-model="val1" :options="optList"></vxe-segmented>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('1')
const optList = [
  { label: '选项1', value: '1', icon: 'vxe-icon-home' },
  { label: '选项2', value: '2', icon: 'vxe-icon-bell' },
  { label: '选项3', value: '3', icon: 'vxe-icon-chat' },
  { label: '选项4', value: '4', icon: 'vxe-icon-setting' },
  { label: '选项5', value: '5', icon: 'vxe-icon-location' },
  { label: '选项6', value: '6', icon: 'vxe-icon-flag' },
  { label: '选项7', value: '7', icon: 'vxe-icon-location' }
]
</script>
