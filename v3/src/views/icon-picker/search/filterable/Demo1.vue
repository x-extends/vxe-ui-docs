<template>
  <div>
    <vxe-icon-picker v-model="val1" :popup-config="popupConfig" show-icon-title filterable clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const popupConfig: VxeIconPickerPropTypes.PopupConfig = {
      width: 400
    }

    return {
      val1: '',
      popupConfig
    }
  }
})
</script>
