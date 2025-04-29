<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="显示到右侧" :control-config="controlConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const controlConfig: VxeNumberInputPropTypes.ControlConfig = {
      layout: 'right'
    }

    return {
      val1: null,
      controlConfig
    }
  }
})
</script>
