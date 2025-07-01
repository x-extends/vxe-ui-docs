<template>
  <div>
    <vxe-color-picker v-model="val1" clearable></vxe-color-picker>
    <vxe-color-picker v-model="val2" clearable></vxe-color-picker>
    <vxe-color-picker v-model="val3" clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '#00FFFF',
      val3: '#00ffffcc'
    }
  }
})
</script>
