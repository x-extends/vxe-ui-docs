<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="colorObj">
      <span>类型：{{ colorObj.type }}</span>
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
    colorObj () {
      return VxeUI.color.parseColor(this.val1)
    }
  }
})
</script>
