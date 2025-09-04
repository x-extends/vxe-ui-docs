<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义前缀图标" type="amount" prefix-icon="vxe-icon-usd"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 100000000
    }
  }
})
</script>
