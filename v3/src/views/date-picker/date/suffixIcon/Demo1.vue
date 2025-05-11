<template>
  <div>
    <vxe-date-picker v-model="val1" suffix-icon="vxe-icon-lock-fill" clearable></vxe-date-picker>
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
