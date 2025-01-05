<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="年-月-日 时" type="datetime" value-format="yyyy-MM-dd HH" label-format="yyyy-MM-dd HH" clearable></vxe-date-picker>
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
