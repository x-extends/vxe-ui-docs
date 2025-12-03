<template>
  <div>
    <vxe-radio-group v-model="val1" :options="btnOptions"></vxe-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()

const btnOptions = [
  { value: '1', label: '按钮1' },
  { value: '2', label: '按钮2' },
  { value: '3', label: '按钮3' },
  { value: '4', label: '按钮4' }
]
</script>
