<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-input v-model="val1" :readonly="isReadonly"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '内容111',
      isReadonly: true
    }
  }
})
</script>
