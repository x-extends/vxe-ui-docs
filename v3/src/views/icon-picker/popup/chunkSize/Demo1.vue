<template>
  <div>
    <vxe-icon-picker v-model="val1" :popup-config="popupConfig" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const popupConfig: VxeIconPickerPropTypes.PopupConfig = {
      chunkSize: 8,
      width: 600,
      height: 400
    }

    return {
      val1: '',
      popupConfig
    }
  }
})
</script>
