<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="默认2为小数" type="amount"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="设置为4为小数" type="amount" digits="4"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: null
    }
  }
})
</script>
