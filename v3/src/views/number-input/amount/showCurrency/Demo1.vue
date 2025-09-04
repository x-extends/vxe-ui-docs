<template>
  <div>
    <vxe-number-input v-model="val1" type="amount" show-currency clearable></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 100000000
    }
  }
})
</script>
