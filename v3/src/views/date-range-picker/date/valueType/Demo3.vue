<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      startDate: '2025-10-10',
      endDate: '2025-12-01'
    }
  }
})
</script>
