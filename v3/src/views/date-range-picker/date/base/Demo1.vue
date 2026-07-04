<template>
  <div>
    <vxe-date-range-picker v-model="val1" clearable></vxe-date-range-picker>
    <div>{{ val1 }}</div>
    <br>
    <vxe-date-range-picker v-model="val2" clearable></vxe-date-range-picker>
    <div>{{ val2 }}</div>
    <br>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" clearable></vxe-date-range-picker>
    <div>{{ startDate }}</div>
    <div>{{ endDate }}</div>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '2025-10-10,2025-12-01',
      val2: ['2025-10-10', '2025-12-01'],
      startDate: '2025-10-10',
      endDate: '2025-12-01'
    }
  }
})
</script>
