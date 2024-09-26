<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期多选" type="date" clearable multiple></vxe-input>
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
