<template>
  <div>
    <vxe-calendar v-model="val" type="month"></vxe-calendar>
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
