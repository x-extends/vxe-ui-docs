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
  'home',
  'company',
  'comment',
  'setting',
  'send',
  'envelope',
  'envelope-open'
])
</script>
