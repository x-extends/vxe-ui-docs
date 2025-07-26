<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-number-input v-model="val1" type="amount" :readonly="isReadonly"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 123.67,
      isReadonly: true
    }
  }
})
</script>
