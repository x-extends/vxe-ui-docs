<template>
  <div>
    <vxe-input v-model="val1" suffix-icon="vxe-icon-warning-circle-fill" placeholder="自定义后缀图标"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ''
    }
  }
})
</script>
