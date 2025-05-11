<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>

    <vxe-date-picker v-model="val1" :readonly="isReadonly"></vxe-date-picker>
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
