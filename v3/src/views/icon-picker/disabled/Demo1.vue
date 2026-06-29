<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>
    <vxe-icon-picker v-model="val1" :disabled="isDisabled"></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      isDisabled: false
    }
  }
})
</script>
