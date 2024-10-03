<template>
  <div style="position: relative;height: 400px;">
    <vxe-watermark content="Vxe UI" :font="watermarkFont"></vxe-watermark>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeWatermarkPropTypes } from 'vxe-pc-ui'

const watermarkFont = reactive<VxeWatermarkPropTypes.Font>({
  fontSize: 48
})
</script>
