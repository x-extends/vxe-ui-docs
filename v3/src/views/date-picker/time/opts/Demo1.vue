<template>
  <div>
    <vxe-date-picker v-model="val1" type="time" :time-config="timeConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const timeConfig: VxeDatePickerPropTypes.TimeConfig = {
      hours: [8, 9, 10, 11, 12, 14, 15, 16, 17, 18]
    }

    return {
      val1: '',
      timeConfig
    }
  }
})
</script>
