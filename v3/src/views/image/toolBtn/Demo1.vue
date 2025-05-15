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
      pctFull: false,
      pct11: false,
      rotateLeft: true,
      rotateRight: true,
      print: false,
      download: false
    }

    return {
      toolbarConfig
    }
  }
})
</script>
