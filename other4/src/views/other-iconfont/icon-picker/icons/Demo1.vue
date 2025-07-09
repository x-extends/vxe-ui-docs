<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('mytesticonfont mytest-customer-outline')
const iconList = ref<VxeIconPickerPropTypes.Icons>([
  { icon: 'mytesticonfont mytest-assets-2' },
  { icon: 'mytesticonfont mytest-carrier-management-outline' },
  { icon: 'mytesticonfont mytest-assets' },
  { icon: 'mytesticonfont mytest-switch' },
  { icon: 'mytesticonfont mytest-camera' },
  { icon: 'mytesticonfont mytest-Clear' },
  { icon: 'mytesticonfont mytest-closure' },
  { icon: 'mytesticonfont mytest-link' },
  { icon: 'mytesticonfont mytest-ransmission' },
  { icon: 'mytesticonfont mytest-calendar' },
  { icon: 'mytesticonfont mytest-customer-outline' },
  { icon: 'mytesticonfont mytest-search' },
  { icon: 'mytesticonfont mytest-Telephone' }
])
</script>
