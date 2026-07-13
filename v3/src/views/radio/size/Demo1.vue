<template>
  <div>
    <vxe-radio v-model="val1" checked-value="2" size="xlarge">特大尺寸</vxe-radio>
    <vxe-radio v-model="val2" checked-value="2" size="large">大型尺寸</vxe-radio>
    <vxe-radio v-model="val3" checked-value="1">默认尺寸</vxe-radio>
    <vxe-radio v-model="val4" checked-value="2" size="medium">中等尺寸</vxe-radio>
    <vxe-radio v-model="val5" checked-value="3" size="small">小型尺寸</vxe-radio>
    <vxe-radio v-model="val6" checked-value="4" size="mini">超小尺寸</vxe-radio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: null,
      val3: null,
      val4: null,
      val5: null,
      val6: null
    }
  }
})
</script>
