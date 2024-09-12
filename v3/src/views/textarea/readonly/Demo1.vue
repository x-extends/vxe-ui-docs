<template>
  <div>
    <vxe-textarea v-model="val1" readonly></vxe-textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '只读内容'
    }
  }
})
</script>
