<template>
  <div>
    <vxe-date-picker v-model="val1" type="datetime" value-format="dd/MM/yyyy HH:mm:ss"></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="datetime" value-format="dd/MM/yyyy HH:mm:ss"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: '01/01/2025 12:30:00'
    }
  }
})
</script>
