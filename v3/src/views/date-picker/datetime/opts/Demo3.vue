<template>
  <div>
    <vxe-date-picker v-model="val1" type="datetime" :time-config="timeConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const timeConfig: VxeDatePickerPropTypes.TimeConfig = {
      seconds: [0, 10, 20, 30, 40, 50]
    }

    return {
      val1: '',
      timeConfig
    }
  }
})
</script>
