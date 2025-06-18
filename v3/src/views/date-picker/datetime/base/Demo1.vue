<template>
  <div>
    <vxe-date-picker v-model="val1" type="datetime"></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="datetime"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '2025-06-06 10:10:30'
    }
  }
})
</script>
