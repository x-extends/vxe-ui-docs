<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义图标" type="amount" plus-icon="vxe-icon-caret-up" minus-icon="vxe-icon-caret-down"></vxe-number-input>
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
