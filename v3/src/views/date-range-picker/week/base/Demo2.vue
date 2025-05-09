<template>
  <div>
    <vxe-date-range-picker v-model="val1" type="week"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ['2025-01-01', '2025-01-16']
    }
  }
})
</script>
