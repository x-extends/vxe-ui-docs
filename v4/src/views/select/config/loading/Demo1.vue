<template>
  <div>
    <vxe-select v-model="val1" :options="opts1" :loading="loading"></vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'

const val1 = ref([])
const opts1 = ref<VxeSelectPropTypes.Options>([])
const loading = ref(false)

loading.value = true
setTimeout(() => {
  opts1.value = [
    { value: 1001, label: 'table' },
    { value: 1002, label: 'grid' },
    { value: 1003, label: 'button' },
    { value: 1004, label: 'toolbar' },
    { value: 1005, label: 'tooltip' },
    { value: 1006, label: 'pager' }
  ]
  loading.value = false
}, 1000)
</script>
