<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="hexObj">
      <span>Hex：{{ hexObj.hex }}，</span>
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
    hexObj () {
      return VxeUI.color.toHex(this.val1)
    }
  }
})
</script>
