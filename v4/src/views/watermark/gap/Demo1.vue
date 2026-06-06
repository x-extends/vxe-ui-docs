<template>
  <div style="position: relative;height: 400px;">
    <vxe-watermark content="Vxe Table 企业级表格解决方案" :gap="watermarkGap"></vxe-watermark>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeWatermarkPropTypes } from 'vxe-pc-ui'

const watermarkGap = ref<VxeWatermarkPropTypes.Gap>([20, 20])
</script>
