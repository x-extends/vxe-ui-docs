<template>
  <div>
    <vxe-date-range-picker v-model="val1" type="time"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ['10:30:10', '12:20:30']
    }
  }
})
</script>
