<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="禁用" type="datetime" disabled></vxe-date-picker>
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
