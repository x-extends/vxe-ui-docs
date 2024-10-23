<template>
  <div>
    <vxe-checkbox v-model="val1" content="已选中" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val2" content="未选中" indeterminate></vxe-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: true,
      val2: false
    }
  }
})
</script>
