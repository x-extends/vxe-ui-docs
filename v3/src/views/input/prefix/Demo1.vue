<template>
  <div>
    <vxe-input v-model="val1" prefix-icon="vxe-icon-user-fill" placeholder="自定义前缀图标"></vxe-input>
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
