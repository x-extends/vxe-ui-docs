<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="hsvObj">
      <span>H：{{ hsvObj.h }}，</span>
      <span>S：{{ hsvObj.s }}，</span>
      <span>V：{{ hsvObj.v }}，</span>
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
    hsvObj () {
      return VxeUI.color.toHsv(this.val1)
    }
  }
})
</script>
