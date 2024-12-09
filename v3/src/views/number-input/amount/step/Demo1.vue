<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="整数步数 1" type="float" step="4"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="小数步数 5.5" type="float" step="3.5"></vxe-number-input>
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
