<template>
  <div>
    <vxe-input v-model="val1" :prefix-config="prefixConfig" placeholder="自定义前缀文本"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const prefixConfig: VxeInputPropTypes.PrefixConfig = {
      content: '￥'
    }

    return {
      val1: '',
      prefixConfig
    }
  }
})
</script>
