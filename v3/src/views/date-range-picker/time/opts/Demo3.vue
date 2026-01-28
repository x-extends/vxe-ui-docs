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
      seconds: [0, 10, 20, 30, 40, 50]
    }

    return {
      startDate: '',
      endDate: '',
      timeConfig
    }
  }
})
</script>
