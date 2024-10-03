<template>
  <div>
    <vxe-button @click="loadWatermark">加载水印</vxe-button>
    <vxe-button @click="clearWatermark">清除水印</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    loadWatermark () {
      VxeUI.watermark.load({
        content: 'Vxe Table 专业表格'
      })
    },
    clearWatermark  () {
      VxeUI.watermark.clear()
    }
  }
})
</script>
