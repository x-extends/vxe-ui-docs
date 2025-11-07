<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="默认带控制按钮" type="integer"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="关闭控制按钮" type="integer" :control-config="controlConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const controlConfig: VxeNumberInputPropTypes.ControlConfig = {
      enabled: false
    }

    return {
      val1: null,
      val2: null,
      controlConfig
    }
  }
})
</script>
