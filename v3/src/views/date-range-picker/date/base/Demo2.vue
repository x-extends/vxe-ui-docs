<template>
  <div>
    <vxe-date-range-picker v-model="val2" value-format="date" clearable></vxe-date-range-picker>
    <div>{{ val2 }}</div>
    <br>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" value-format="date" clearable></vxe-date-range-picker>
    <div>{{ startDate }}</div>
    <div>{{ endDate }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val2: [new Date(2025, 9, 10), new Date(2025, 11, 1)],
      startDate: new Date(2025, 9, 10),
      endDate: new Date(2025, 11, 1)
    }
  }
})
</script>
