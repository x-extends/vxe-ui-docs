<template>
  <div>
    <vxe-date-range-picker v-model="val1" value-format="timestamp" clearable></vxe-date-range-picker>
    <vxe-date-range-picker v-model="val2" value-format="timestamp" clearable></vxe-date-range-picker>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" value-format="timestamp" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: `${new Date(2025, 9, 10).getTime()},${new Date(2025, 11, 1).getTime()}`,
      val2: [new Date(2025, 9, 10).getTime(), new Date(2025, 11, 1).getTime()],
      startDate: new Date(2025, 9, 10).getTime(),
      endDate: new Date(2025, 11, 1).getTime()
    }
  }
})
</script>
