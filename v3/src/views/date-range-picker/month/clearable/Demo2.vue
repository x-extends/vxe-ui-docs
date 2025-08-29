<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="month" :show-clear-button="false" clearable ></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      startDate: '',
      endDate: ''
    }
  }
})
</script>
