<template>
  <div>
    <vxe-input v-model="val1" placeholder="季选择" type="quarter" clearable></vxe-input>
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
