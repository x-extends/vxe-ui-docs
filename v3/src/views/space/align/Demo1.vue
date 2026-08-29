<template>
  <div>
    <div>
      <vxe-radio-group v-model="customAlign">
        <vxe-radio-button checked-value="start" content="起始对齐"></vxe-radio-button>
        <vxe-radio-button checked-value="center" content="居中对齐"></vxe-radio-button>
        <vxe-radio-button checked-value="end" content="终点对齐"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-space :align="customAlign">
      <vxe-card title="卡片1" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="80"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片2" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="200"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片3" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="140"></vxe-image>
      </vxe-card>
    </vxe-space>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeSpacePropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const customAlign: VxeSpacePropTypes.Align = 'center'
    return {
      customAlign
    }
  }
})
</script>
