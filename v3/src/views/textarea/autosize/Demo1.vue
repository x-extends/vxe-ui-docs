<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="2行高度" :autosize="{ minRows: 2, maxRows: 2 }"></vxe-textarea>
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
