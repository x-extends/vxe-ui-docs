<template>
  <div>
    <vxe-slider v-model="val1" status="primary" disabled></vxe-slider>
    <vxe-slider v-model="val2" status="success" disabled></vxe-slider>
    <vxe-slider v-model="val3" status="info" disabled></vxe-slider>
    <vxe-slider v-model="val4" status="warning" disabled></vxe-slider>
    <vxe-slider v-model="val5" status="error" disabled></vxe-slider>
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
      val4: 70,
      val5: 90
    }
  }
})
</script>
