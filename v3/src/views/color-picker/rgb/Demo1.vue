<template>
  <div>
    <vxe-color-picker v-model="val1" type="rgb" :show-alpha="false" clearable></vxe-color-picker>
    <div>{{ val1 }}</div>
    <vxe-color-picker v-model="val2" type="rgb" :show-alpha="false" clearable></vxe-color-picker>
    <div>{{ val2 }}</div>
    <vxe-color-picker v-model="val3" type="rgb" show-alpha clearable></vxe-color-picker>
    <div>{{ val3 }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: 'rgb(220, 20, 60)',
      val3: 'rgb(0, 0, 139, 0.8)'
    }
  }
})
</script>
