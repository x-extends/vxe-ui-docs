<template>
  <div style="position: relative;height: 400px;">
    <vxe-watermark content="Vxe UI" :gap="watermarkGap"></vxe-watermark>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeWatermarkPropTypes } from 'vxe-pc-ui'

const watermarkGap = ref<VxeWatermarkPropTypes.Gap>([50, 50])
</script>
