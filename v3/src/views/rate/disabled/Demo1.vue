<template>
  <div>
    <vxe-rate v-model="val1" disabled></vxe-rate>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 2
    }
  }
})
</script>
