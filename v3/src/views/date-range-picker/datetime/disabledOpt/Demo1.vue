<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="datetime" :time-config="timeConfig" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const timeConfig: VxeDateRangePickerPropTypes.TimeConfig = {
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
      startDate: '',
      endDate: '',
      timeConfig
    }
  }
})
</script>
