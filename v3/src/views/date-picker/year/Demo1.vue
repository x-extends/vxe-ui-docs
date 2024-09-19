<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="年选择" type="year" clearable></vxe-date-picker>
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
