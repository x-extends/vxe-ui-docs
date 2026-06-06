<template>
  <div style="position: relative;height: 400px;">
    <vxe-watermark content="Vxe Table 企业级表格解决方案" :gap="watermarkGap"></vxe-watermark>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeWatermarkPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const watermarkGap: VxeWatermarkPropTypes.Gap = [20, 20]

    return {
      watermarkGap
    }
  }
})
</script>
