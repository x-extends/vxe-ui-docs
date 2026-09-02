<template>
  <div>
    <vxe-number-input v-model="val1" type="amount" placeholder="实时显示工具提示" show-tooltip></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null
    }
  }
})
</script>
