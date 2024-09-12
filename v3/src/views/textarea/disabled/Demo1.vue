<template>
  <div>
    <vxe-textarea v-model="val1" disabled></vxe-textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '禁用内容'
    }
  }
})
</script>
