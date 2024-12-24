<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="最小值" type="float" min="5"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="最大值" type="float" max="50"></vxe-number-input>
    <vxe-number-input v-model="val3" placeholder="最小值与最大值" type="float" min="10" max="100"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: null,
      val3: null
    }
  }
})
</script>
