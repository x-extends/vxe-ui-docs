<template>
  <div>
    <vxe-date-range-picker v-model="val1" type="month"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '2025-10-10,2025-12-01'
    }
  }
})
</script>
