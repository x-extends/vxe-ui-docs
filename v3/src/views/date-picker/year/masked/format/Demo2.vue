<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="自定义掩码格式" type="year" label-format="yyyy年" :masked-config="maskedConfig" :popup-config="popupConfig" clearable></vxe-date-picker>
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

    const popupConfig: VxeDatePickerPropTypes.PopupConfig = {
      enabled: false
    }

    return {
      val1,
      maskedConfig,
      popupConfig
    }
  }
})
</script>
