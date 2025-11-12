<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="面板默认值" type="time" default-time="10:30:10"></vxe-date-picker>
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
