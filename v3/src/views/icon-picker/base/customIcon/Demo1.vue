<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 'vxe-icon-comment',
      iconList: [
        { icon: 'vxe-icon-home' },
        { icon: 'vxe-icon-company' },
        { icon: 'vxe-icon-comment' },
        { icon: 'vxe-icon-setting' },
        { icon: 'vxe-icon-send' },
        { icon: 'vxe-icon-envelope' },
        { icon: 'vxe-icon-envelope-open' }
      ]
    }
  }
})
</script>
