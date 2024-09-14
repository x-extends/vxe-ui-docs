<template>
  <div>
    <vxe-password-input v-model="val1" placeholder="可清除" clearable></vxe-password-input>
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
