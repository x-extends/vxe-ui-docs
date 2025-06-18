<template>
  <div>
    <vxe-date-picker v-model="val1" type="year" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="year" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '2025-01-01'
    }
  }
})
</script>
