<template>
  <div>
    <vxe-color-picker v-model="val1"></vxe-color-picker>
    <vxe-color-picker v-model="val2" size="medium"></vxe-color-picker>
    <vxe-color-picker v-model="val3" size="small"></vxe-color-picker>
    <vxe-color-picker v-model="val4" size="mini"></vxe-color-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: ''
    }
  }
})
</script>
