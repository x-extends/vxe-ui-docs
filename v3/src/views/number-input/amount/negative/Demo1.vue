<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="可输入负数" type="amount" negative></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="禁止输入负数" type="amount" :negative="false"></vxe-number-input>
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
