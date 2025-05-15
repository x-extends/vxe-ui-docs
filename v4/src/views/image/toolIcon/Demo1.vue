<template>
  <div>
    <vxe-image src="https://vxeui.com/resource/img/fj577.jpg" :width="200" :toolbar-config="toolbarConfig"></vxe-image>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeImagePropTypes } from 'vxe-pc-ui'

const toolbarConfig = reactive<VxeImagePropTypes.ToolbarConfig>({
  zoomOut: {
    icon: 'vxe-icon-square-minus'
  },
  zoomIn: {
    icon: 'vxe-icon-square-plus'
  },
  pctFull: {
    icon: 'vxe-icon-mobile'
  },
  pct11: {
    icon: 'vxe-icon-minimize'
  },
  rotateLeft: {
    icon: 'vxe-icon-swap-left'
  },
  rotateRight: {
    icon: 'vxe-icon-swap-right'
  },
  print: {
    icon: 'vxe-icon-envelope'
  },
  download: {
    icon: 'vxe-icon-cloud-upload'
  }
})
</script>
