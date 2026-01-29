<template>
  <div>
    <vxe-input v-model="val1" type="search" placeholder="搜索类型"></vxe-input>
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
