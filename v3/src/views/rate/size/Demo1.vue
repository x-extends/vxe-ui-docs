<template>
  <div>
    <div>
      <vxe-rate v-model="val1"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val2" size="medium"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val3" size="small"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val4" size="mini"></vxe-rate>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 1,
      val2: 2,
      val3: 3,
      val4: 4
    }
  }
})
</script>
