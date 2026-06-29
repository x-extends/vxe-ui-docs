<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('vxe-icon-comment')
const iconList = ref<VxeIconPickerPropTypes.Icons>([
  { icon: 'vxe-icon-home', title: 'home' },
  { icon: 'vxe-icon-company', title: 'company' },
  { icon: 'vxe-icon-comment', title: 'comment' },
  { icon: 'vxe-icon-setting', title: 'setting' },
  { icon: 'vxe-icon-send', title: 'send' },
  { icon: 'vxe-icon-envelope', title: 'henvelopeome' },
  { icon: 'vxe-icon-envelope-open', title: 'envelope-open' }
])
</script>
