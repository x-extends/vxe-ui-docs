<template>
  <div>
    <vxe-radio-group v-model="maskedConfig.align">
      <vxe-radio-button checked-value="left" content="左对齐"></vxe-radio-button>
      <vxe-radio-button checked-value="right" content="右对齐"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-date-picker v-model="val1" placeholder="对齐方式" type="year" :masked-config="maskedConfig"></vxe-date-picker>
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
      align: 'right',
      maskPlaceholder: '_'
    }

    return {
      val1,
      maskedConfig
    }
  }
})
</script>
