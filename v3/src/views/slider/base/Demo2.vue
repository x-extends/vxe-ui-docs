<template>
  <div>
    <vxe-slider v-model="val1" min="10" max="20"></vxe-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 15
    }
  }
})
</script>
