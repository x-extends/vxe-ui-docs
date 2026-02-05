<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义后缀图标" suffix-icon="vxe-icon-rmb"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="自定义后缀图标" :suffix-config="suffixConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const suffixConfig: VxeNumberInputPropTypes.SuffixConfig = {
      icon: 'vxe-icon-rmb'
    }

    return {
      val1: null,
      val2: null,
      suffixConfig
    }
  }
})
</script>
