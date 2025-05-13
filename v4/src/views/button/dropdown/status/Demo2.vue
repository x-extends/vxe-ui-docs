<template>
  <div>
    <vxe-button mode="text" status="primary" :options="downBtns">下拉按钮</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeButtonPropTypes } from 'vxe-pc-ui'

const downBtns = ref<VxeButtonPropTypes.Options>([
  { name: '1', content: '下拉按钮1', status: 'warning' },
  { name: '2', content: '下拉按钮2', status: 'error' },
  { name: '3', content: '下拉按钮3' }
])
</script>
