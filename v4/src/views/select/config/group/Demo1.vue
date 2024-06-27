<template>
  <div>
    <vxe-select v-model="val1" placeholder="分组配置式" :option-groups="opts1"></vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const opts1 = ref([
  {
    label: '组1',
    options: [
      { label: '1-1', value: '11' },
      { label: '1-2', value: '10' }
    ]
  },
  {
    label: '组2',
    options: [
      { label: '2-1', value: '21' },
      { label: '2-2', value: '22' }
    ]
  }
])
</script>
