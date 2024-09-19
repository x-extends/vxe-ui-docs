<template>
  <div>
    <vxe-input v-model="val1" placeholder="显示字数统计" show-word-count></vxe-input>
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
