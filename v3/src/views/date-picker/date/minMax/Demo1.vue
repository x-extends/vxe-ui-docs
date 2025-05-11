<template>
  <div>
    <vxe-date-picker v-model="startVal" :end-date="endVal" placeholder="开始日期" clearable></vxe-date-picker>
    <vxe-date-picker v-model="endVal" :start-date="startVal" placeholder="结束日期" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      startVal: '',
      endVal: ''
    }
  }
})
</script>
