<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="自定义占位符" type="datetime" :masked-config="maskedConfig"></vxe-date-picker>
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
      isArrow: true,
      maskPlaceholder: '#'
    }

    return {
      val1,
      maskedConfig
    }
  }
})
</script>
