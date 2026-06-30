<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const iconList: VxeIconPickerPropTypes.Icons = [
      'home',
      'company',
      'comment',
      'setting',
      'send',
      'envelope',
      'envelope-open'
    ]
    return {
      val1: 'vxe-icon-comment',
      iconList
    }
  }
})
</script>
