<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="日期和时间多选" type="datetime" limit-count="2" clearable multiple></vxe-date-picker>
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
