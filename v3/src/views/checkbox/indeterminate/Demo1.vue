<template>
  <div>
    <vxe-checkbox v-model="val1" content="默认尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val2" size="medium" content="中等尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val3" size="small" content="小型尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val4" size="mini" content="超小尺寸" indeterminate></vxe-checkbox>
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
      val4: false
    }
  }
})
</script>
