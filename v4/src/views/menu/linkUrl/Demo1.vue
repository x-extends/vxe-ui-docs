<template>
  <div>
    <div style="width: 260px">
      <vxe-menu v-model="selectNav" :options="navList"></vxe-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeMenuPropTypes } from 'vxe-pc-ui'

const selectNav = ref('form')
const navList = ref<VxeMenuPropTypes.Options>([
  { name: 'xx1', title: '组件官网', icon: 'vxe-icon-home', linkUrl: 'https://vxeui.com', linkTarget: '_blank' },
  {
    name: 'xx2',
    title: '菜单1',
    icon: 'vxe-icon-menu',
    children: [
      { name: 'x21', title: '表格官网', linkUrl: 'https://vxetable.cn', linkTarget: '_blank' }
    ]
  },
  {
    name: 'xx3',
    title: '菜单2',
    icon: 'vxe-icon-table',
    children: [
      { name: 'x31', title: '函数库官网', linkUrl: 'https://util.vxeui.com' },
      { name: 'x32', title: '甘特图官网', linkUrl: 'https://gantt.vxeui.com', linkTarget: '_blank' }
    ]
  }
])
</script>
