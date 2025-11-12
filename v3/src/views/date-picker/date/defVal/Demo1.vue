<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="默认值" default-date="2024-10-10"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ''
    }
  }
})
</script>
