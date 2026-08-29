<template>
  <div>
    <vxe-slider v-model="val1" range></vxe-slider>
    <vxe-slider v-model="val2" range></vxe-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: [],
      val2: [10, 30]
    }
  }
})
</script>
