<template>
  <div>
    <vxe-date-picker v-model="val1" value-format="dd/MM/yyyy" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val2" value-format="dd/MM/yyyy" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: '01/01/2025'
    }
  }
})
</script>
