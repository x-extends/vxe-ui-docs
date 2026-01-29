<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>
    <vxe-input v-model="val1" placeholder="禁用" :disabled="isDisabled"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      isDisabled: true
    }
  }
})
</script>
