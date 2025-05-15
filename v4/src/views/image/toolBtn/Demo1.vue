<template>
  <div>
    <vxe-image src="https://vxeui.com/resource/img/fj577.jpg" :width="200" :toolbar-config="toolbarConfig"></vxe-image>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeImagePropTypes } from 'vxe-pc-ui'

const toolbarConfig = reactive<VxeImagePropTypes.ToolbarConfig>({
  zoomOut: true,
  zoomIn: true,
  pctFull: false,
  pct11: false,
  rotateLeft: true,
  rotateRight: true,
  print: false,
  download: false
})
</script>
