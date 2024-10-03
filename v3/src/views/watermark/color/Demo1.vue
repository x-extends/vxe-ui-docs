<template>
  <div style="position: relative;height: 400px;">
    <vxe-watermark content="Vxe UI" :font="watermarkFont"></vxe-watermark>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeWatermarkPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const watermarkFont: VxeWatermarkPropTypes.Font = {
      color: '#ff0000'
    }

    return {
      watermarkFont
    }
  }
})
</script>
