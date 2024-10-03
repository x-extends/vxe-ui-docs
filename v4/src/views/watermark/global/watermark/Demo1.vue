<template>
  <div>
    <vxe-button @click="loadWatermark">加载水印</vxe-button>
    <vxe-button @click="clearWatermark">清除水印</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const loadWatermark = () => {
  VxeUI.watermark.load({
    content: 'Vxe Table 专业表格'
  })
}

const clearWatermark = () => {
  VxeUI.watermark.clear()
}
</script>
