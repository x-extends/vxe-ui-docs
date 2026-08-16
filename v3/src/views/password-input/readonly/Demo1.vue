<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-password-input v-model="val1" :readonly="isReadonly"></vxe-password-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isReadonly: true,
      val1: ''
    }
  }
})
</script>
