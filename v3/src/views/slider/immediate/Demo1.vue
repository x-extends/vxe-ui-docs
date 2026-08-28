<template>
  <div>
    <div>{{ val1 }}</div>
    <vxe-slider v-model="val1" immediate></vxe-slider>
    <div>{{ val2 }}</div>
    <vxe-slider v-model="val2" :immediate="false"></vxe-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 40,
      val2: 40
    }
  }
})
</script>
