<template>
  <div>
    <vxe-switch v-model="val1" size="xlarge"></vxe-switch>
    <vxe-switch v-model="val2" size="large"></vxe-switch>
    <vxe-switch v-model="val3"></vxe-switch>
    <vxe-switch v-model="val4" size="medium"></vxe-switch>
    <vxe-switch v-model="val5" size="small"></vxe-switch>
    <vxe-switch v-model="val6" size="mini"></vxe-switch>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: false,
      val2: false,
      val3: false,
      val4: false,
      val5: false,
      val6: false
    }
  }
})
</script>
