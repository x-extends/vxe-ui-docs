<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>

    <vxe-date-picker v-model="val1" placeholder="禁用" :disabled="isDisabled"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isDisabled: true,
      val1: ''
    }
  }
})
</script>
