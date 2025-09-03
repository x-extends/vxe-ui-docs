<template>
  <div>
    <div>
      <vxe-radio v-model="val1" checked-value="1" content="选项一" disabled></vxe-radio>
      <vxe-radio v-model="val1" checked-value="2" content="选项二" disabled></vxe-radio>
      <vxe-radio v-model="val1" checked-value="3" content="选项三" disabled></vxe-radio>
    </div>
    <div>
      <vxe-radio v-model="val2" checked-value="1" content="选项一" disabled></vxe-radio>
      <vxe-radio v-model="val2" checked-value="2" content="选项二" disabled></vxe-radio>
      <vxe-radio v-model="val2" checked-value="3" content="选项三" disabled></vxe-radio>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: '2'
    }
  }
})
</script>
