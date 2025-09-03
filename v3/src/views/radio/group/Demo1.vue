<template>
  <div>
    <vxe-radio-group v-model="val1">
      <vxe-radio checked-value="1" content="HTML"></vxe-radio>
      <vxe-radio checked-value="2" content="CSS"></vxe-radio>
      <vxe-radio checked-value="3" content="Javascript"></vxe-radio>
      <vxe-radio checked-value="4" content="SASS"></vxe-radio>
      <vxe-radio checked-value="5" content="LESS"></vxe-radio>
    </vxe-radio-group>
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
