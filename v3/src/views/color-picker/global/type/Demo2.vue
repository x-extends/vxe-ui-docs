<template>
  <div>
    <vxe-color-picker v-model="val1" type="hex" show-alpha clearable></vxe-color-picker>
    <div>
      <span>{{ val1 }}</span>
      <vxe-icon name="arrow-double-right"></vxe-icon>
      <span>{{ txt1 }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      val1: ''
    }
  },
  computed: {
    txt1 () {
      return VxeUI.color.toRgbString(this.val1)
    }
  }
})
</script>
