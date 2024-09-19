<template>
  <div>
    <vxe-input v-model="val1" placeholder="年-月-日 时:分" type="datetime" value-format="yyyy-MM-dd HH:mm" clearable></vxe-input>
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
