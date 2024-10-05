<template>
  <div>
    <vxe-slider v-model="val1"></vxe-slider>
    <vxe-slider v-model="val2" size="medium"></vxe-slider>
    <vxe-slider v-model="val3" size="small"></vxe-slider>
    <vxe-slider v-model="val4" size="mini"></vxe-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 10,
      val2: 30,
      val3: 50,
      val4: 70
    }
  }
})
</script>
