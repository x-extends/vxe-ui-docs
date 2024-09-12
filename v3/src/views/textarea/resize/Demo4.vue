<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="可以调节元素的宽度和高度" resize="both"></vxe-textarea>
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
