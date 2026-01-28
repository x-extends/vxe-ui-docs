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
      hourDisabledMethod ({ hour }) {
        return hour % 2 === 0
      },
      minuteDisabledMethod ({ minute }) {
        return minute % 5 === 0
      },
      secondDisabledMethod ({ second }) {
        return second % 10 === 0
      }
    }

    return {
      val1: '',
      timeConfig
    }
  }
})
</script>
