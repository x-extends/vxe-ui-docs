<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="面板默认值" type="quarter" default-date="2024-02-01"></vxe-date-picker>
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
