<template>
  <div style="position: relative;height: 400px;">
    <vxe-watermark content="Vxe UI" :gap="watermarkGap"></vxe-watermark>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeWatermarkPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const watermarkGap: VxeWatermarkPropTypes.Gap = [50, 50]

    return {
      watermarkGap
    }
  }
})
</script>
