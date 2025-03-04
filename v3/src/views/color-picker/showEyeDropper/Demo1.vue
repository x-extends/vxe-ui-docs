<template>
  <div>
    <vxe-color-picker v-model="val1" show-eye-dropper clearable></vxe-color-picker>
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
