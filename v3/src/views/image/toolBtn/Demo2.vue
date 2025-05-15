<template>
  <div>
    <vxe-image src="https://vxeui.com/resource/img/fj577.jpg" :width="200" :toolbar-config="toolbarConfig"></vxe-image>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeImagePropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const toolbarConfig: VxeImagePropTypes.ToolbarConfig = {
      zoomOut: true,
      zoomIn: true,
      pctFull: true,
      pct11: true,
      rotateLeft: true,
      rotateRight: true,
      print: true,
      download: true
    }

    return {
      toolbarConfig
    }
  }
})
</script>
