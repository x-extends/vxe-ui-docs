<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="禁止输入" :editable="false"></vxe-number-input>
    <vxe-number-input v-model="val2" readonly></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 123,
      val2: 123
    }
  }
})
</script>
