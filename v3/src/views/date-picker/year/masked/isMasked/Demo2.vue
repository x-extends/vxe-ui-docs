<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="掩码输入" type="year" :masked-config="maskedConfig" :popup-config="popupConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const val1 = '2026'
    const maskedConfig: VxeDatePickerPropTypes.MaskedConfig = {
      isMasked: true
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
