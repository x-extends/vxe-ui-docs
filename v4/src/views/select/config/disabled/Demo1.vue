<template>
  <div>
    <vxe-select v-model="val1" placeholder="禁用选项" :options="opts1" disabled></vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const opts1 = ref([
  { label: '1111', value: '1' },
  { label: '2222', value: '2' },
  { label: '3333', value: '3' },
  { label: '4444', value: '4' },
  { label: '5555', value: '5' },
  { label: '6666', value: '6' },
  { label: '7777', value: '7' },
  { label: '8888', value: '8' },
  { label: '9999', value: '9' },
  { label: '1010', value: '10' },
  { label: '1111', value: '11' }
])
</script>
