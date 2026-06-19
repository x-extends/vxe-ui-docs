<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="自定义掩码格式" type="time" label-format="HH时mm分ss秒" :masked-config="maskedConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const val1 = ''
    const maskedConfig: VxeDatePickerPropTypes.MaskedConfig = {
      isMasked: true,
      isArrow: true
    }

    return {
      val1,
      maskedConfig
    }
  }
})
</script>
