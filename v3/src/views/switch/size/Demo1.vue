<template>
  <div>
    <vxe-switch v-model="val1"></vxe-switch>
    <vxe-switch v-model="val2" size="medium"></vxe-switch>
    <vxe-switch v-model="val3" size="small"></vxe-switch>
    <vxe-switch v-model="val4" size="mini"></vxe-switch>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: true,
      val2: false,
      val3: true,
      val4: false
    }
  }
})
</script>
