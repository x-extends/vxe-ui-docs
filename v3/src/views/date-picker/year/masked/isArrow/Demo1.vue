<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="可方向键操作" type="year" :masked-config="maskedConfig" clearable></vxe-date-picker>
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
