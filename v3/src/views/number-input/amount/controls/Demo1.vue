<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="关闭控制按钮" type="amount" :control-config="controlConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const controlConfig: VxeNumberInputPropTypes.ControlConfig = {
      showButton: false
    }

    return {
      val1: null,
      controlConfig
    }
  }
})
</script>
