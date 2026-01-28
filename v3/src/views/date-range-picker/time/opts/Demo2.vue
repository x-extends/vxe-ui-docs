<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="time" :time-config="timeConfig" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const timeConfig: VxeDateRangePickerPropTypes.TimeConfig = {
      minutes: [0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55]
    }

    return {
      startDate: '',
      endDate: '',
      timeConfig
    }
  }
})
</script>
