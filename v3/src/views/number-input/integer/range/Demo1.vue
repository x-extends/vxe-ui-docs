<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="最小值" type="integer" min="5"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="可清除" type="integer" min="5" clearable></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: null
    }
  }
})
</script>
