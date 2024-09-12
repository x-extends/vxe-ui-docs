<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="字数统计" max-length="100" show-word-count></vxe-textarea>
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
