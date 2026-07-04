<template>
  <div>
    <vxe-date-range-picker v-model="val1" value-format="dd/MM/yyyy" clearable></vxe-date-range-picker>
    <div>{{ val1 }}</div>
    <br>
    <vxe-date-range-picker v-model="val2" value-format="dd/MM/yyyy" clearable></vxe-date-range-picker>
    <div>{{ val2 }}</div>
    <br>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" value-format="dd/MM/yyyy" clearable></vxe-date-range-picker>
    <div>{{ startDate }}</div>
    <div>{{ endDate }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '10/10/2025,01/12/2025',
      val2: ['10/10/2025', '01/12/2025'],
      startDate: '10/10/2025',
      endDate: '01/12/2025'
    }
  }
})
</script>
