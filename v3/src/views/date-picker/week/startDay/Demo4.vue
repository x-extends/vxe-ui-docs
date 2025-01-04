<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="周选择，周四开始" type="week" :start-day="4" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ''
    }
  }
})
</script>
