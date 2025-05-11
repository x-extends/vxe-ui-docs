<template>
  <div>
    <vxe-date-picker v-model="val1" :auto-close="false" clearable show-confirm-button show-clear-button></vxe-date-picker>
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
