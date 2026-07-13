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
      userName: null,
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
