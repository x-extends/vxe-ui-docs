<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="面板默认日期值" type="datetime" default-date="2025-02-01"></vxe-date-picker>
    <vxe-date-picker v-model="val2" placeholder="面板默认时间值" type="datetime" default-time="10:30:10"></vxe-date-picker>
    <vxe-date-picker v-model="val3" placeholder="面板默认日期和时间值" type="datetime" default-date="2025-02-01" default-time="10:30:10"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: ''
    }
  }
})
</script>
