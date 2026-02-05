<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义前缀图标" prefix-icon="vxe-icon-usd"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="自定义前缀图标" :prefix-config="prefixConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const prefixConfig: VxeNumberInputPropTypes.PrefixConfig = {
      icon: 'vxe-icon-usd'
    }

    return {
      val1: null,
      val2: null,
      prefixConfig
    }
  }
})
</script>
