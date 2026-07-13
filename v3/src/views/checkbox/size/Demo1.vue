<template>
  <div>
    <vxe-checkbox v-model="val1" size="xlarge">特大尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val2" size="large">大型尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val3">默认尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val4" size="medium">中等尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val5" size="small">小型尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val6" size="mini">超小尺寸</vxe-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: false,
      val2: false,
      val3: false,
      val4: false,
      val5: false,
      val6: false
    }
  }
})
</script>
