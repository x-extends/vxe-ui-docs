<template>
  <div>
    <vxe-calendar v-model="val"></vxe-calendar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val: ''
    }
  }
})
</script>
