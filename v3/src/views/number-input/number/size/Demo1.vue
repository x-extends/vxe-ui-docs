<template>
  <div>
    <vxe-number-input v-model="val1" size="xlarge" placeholder="特大尺寸"></vxe-number-input>
    <vxe-number-input v-model="val2" size="large" placeholder="大型尺寸"></vxe-number-input>
    <vxe-number-input v-model="val3" placeholder="默认尺寸"></vxe-number-input>
    <vxe-number-input v-model="val4" size="medium" placeholder="中等尺寸"></vxe-number-input>
    <vxe-number-input v-model="val5" size="small" placeholder="小型尺寸"></vxe-number-input>
    <vxe-number-input v-model="val6" size="mini" placeholder="超小尺寸"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 999,
      val2: 999,
      val3: 999,
      val4: 999,
      val5: 999,
      val6: 999
    }
  }
})
</script>
