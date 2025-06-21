<template>
  <div>
    <vxe-checkbox v-model="val1" content="禁用" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val2" content="选中禁用" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val3" content="半选禁用" indeterminate disabled></vxe-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: false,
      val2: true,
      val3: false
    }
  }
})
</script>
