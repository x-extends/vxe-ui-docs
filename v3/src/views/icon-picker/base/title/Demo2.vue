<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" show-icon-title clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const iconList: VxeIconPickerPropTypes.Icons = [
      { icon: 'vxe-icon-home', title: 'home' },
      { icon: 'vxe-icon-company', title: 'company' },
      { icon: 'vxe-icon-comment', title: 'comment' },
      { icon: 'vxe-icon-setting', title: 'setting' },
      { icon: 'vxe-icon-send', title: 'send' },
      { icon: 'vxe-icon-envelope', title: 'henvelopeome' },
      { icon: 'vxe-icon-envelope-open', title: 'envelope-open' }
    ]
    return {
      val1: 'vxe-icon-comment',
      iconList
    }
  }
})
</script>
