<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>

    <vxe-date-range-picker v-model="val1" :readonly="isReadonly"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isReadonly: true,
      val1: '2025-10-01,2025-10-07'
    }
  }
})
</script>
