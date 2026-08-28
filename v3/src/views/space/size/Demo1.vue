<template>
  <div>
    <vxe-radio-group v-model="customSize">
      <vxe-radio-button checked-value="xlarge" content="特大尺寸"></vxe-radio-button>
      <vxe-radio-button checked-value="large" content="大型尺寸"></vxe-radio-button>
      <vxe-radio-button checked-value="" content="默认尺寸"></vxe-radio-button>
      <vxe-radio-button checked-value="medium" content="中等尺寸"></vxe-radio-button>
      <vxe-radio-button checked-value="small" content="小型尺寸"></vxe-radio-button>
      <vxe-radio-button checked-value="mini" content="超小尺寸"></vxe-radio-button>
    </vxe-radio-group>

    <div>
      <vxe-space :size="customSize">
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="200"></vxe-image>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="200"></vxe-image>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="200"></vxe-image>
      </vxe-space>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeComponentSizeType } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const customSize = '' as VxeComponentSizeType
    return {
      customSize
    }
  }
})
</script>
