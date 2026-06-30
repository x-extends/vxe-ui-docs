<template>
  <div>
    <vxe-icon-picker v-model="val1" clearable></vxe-icon-picker>
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
