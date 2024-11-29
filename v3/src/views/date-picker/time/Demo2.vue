<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="时:分" type="time" value-format="HH:mm" label-format="HH:mm" clearable></vxe-date-picker>
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
