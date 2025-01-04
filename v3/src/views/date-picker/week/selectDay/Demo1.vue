<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="指定返回周五" type="week" :select-day="5"></vxe-date-picker>
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
