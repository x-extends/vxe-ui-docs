<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="数值类型"></vxe-number-input>
    <vxe-number-input v-model="val2"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: 123
    }
  }
})
</script>
