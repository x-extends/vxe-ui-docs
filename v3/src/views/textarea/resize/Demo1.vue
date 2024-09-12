<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="关闭调节元素" resize="none"></vxe-textarea>
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
