<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" placeholder="面板默认日期值" type="datetime" default-date="2014-01-01"></vxe-date-range-picker>
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
