<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="rgbObj">
      <span>R：{{ rgbObj.r }}，</span>
      <span>G：{{ rgbObj.g }}，</span>
      <span>B：{{ rgbObj.b }}，</span>
      <span>A：{{ rgbObj.a }}</span>
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
    rgbObj () {
      return VxeUI.color.toRgb(this.val1)
    }
  }
})
</script>
