<template>
  <div>
    <vxe-select v-model="val1" placeholder="本地搜索" :options="opts1" clearable filterable></vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const opts1 = ref([
  { value: 1001, label: 'table' },
  { value: 1002, label: 'grid' },
  { value: 1003, label: 'button' },
  { value: 1004, label: 'toolbar' },
  { value: 1005, label: 'tooltip' },
  { value: 1006, label: 'pager' },
  { value: 1007, label: 'print' },
  { value: 1008, label: 'export' },
  { value: 1009, label: 'import' },
  { value: 1010, label: 'select' },
  { value: 1012, label: 'checkbox' },
  { value: 1013, label: 'group' }
])
</script>
