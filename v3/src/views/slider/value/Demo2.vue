<template>
  <div>
    <vxe-slider :start-value.sync="startNum1" :end-value.sync="endNum1" range></vxe-slider>
    <vxe-slider :start-value.sync="startNum2" :end-value.sync="endNum2" range></vxe-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      startNum1: 0,
      endNum1: 0,
      startNum2: 30,
      endNum2: 70
    }
  }
})
</script>
