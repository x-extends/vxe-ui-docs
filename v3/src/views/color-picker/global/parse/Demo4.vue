<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="hslObj">
      <span>H：{{ hslObj.h }}，</span>
      <span>S：{{ hslObj.s }}，</span>
      <span>L：{{ hslObj.l }}，</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      val1: '#5467D6'
    }
  },
  computed: {
    hslObj () {
      return VxeUI.color.toHsl(this.val1)
    }
  }
})
</script>
