<template>
  <div>
    <vxe-switch v-model="isTrim"></vxe-switch>
    <vxe-input v-model="val1" placeholder="去掉左右空格" :trim="isTrim"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      isTrim: true
    }
  }
})
</script>
