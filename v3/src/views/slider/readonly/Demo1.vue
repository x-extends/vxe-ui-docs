<template>
  <div>
    <vxe-slider v-model="val1" readonly></vxe-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 40
    }
  }
})
</script>
