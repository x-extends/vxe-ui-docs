<template>
  <div>
    <vxe-date-picker v-model="val1" type="quarter" value-format="timestamp" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="quarter" value-format="timestamp" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: Date.now()
    }
  }
})
</script>
