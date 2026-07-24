<template>
  <div>
    <vxe-color-picker v-model="val1" clearable></vxe-color-picker>
    <div>
      <span :style="{background: val1}">{{ val1 }}</span>
      <vxe-icon name="arrow-double-right"></vxe-icon>
      <span :style="{background: txt1}">{{ txt1 }}</span>
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
      return VxeUI.color.lighten(this.val1, 10)
    }
  }
})
</script>
