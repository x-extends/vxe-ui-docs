<template>
  <div>
    <vxe-radio-group v-model="val1" :strict="false">
      <vxe-radio checked-value="1" content="支持取消1"></vxe-radio>
      <vxe-radio checked-value="2" content="支持取消2"></vxe-radio>
      <vxe-radio checked-value="3" content="支持取消3"></vxe-radio>
    </vxe-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null
    }
  }
})
</script>
