<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-number-input v-model="val1" :readonly="isReadonly"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 123,
      isReadonly: true
    }
  }
})
</script>
