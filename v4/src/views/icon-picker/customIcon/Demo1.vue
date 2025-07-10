<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('vxe-icon-comment')
const iconList = ref([
  { icon: 'vxe-icon-home' },
  { icon: 'vxe-icon-company' },
  { icon: 'vxe-icon-comment' },
  { icon: 'vxe-icon-setting' },
  { icon: 'vxe-icon-send' },
  { icon: 'vxe-icon-envelope' },
  { icon: 'vxe-icon-envelope-open' }
])
</script>
