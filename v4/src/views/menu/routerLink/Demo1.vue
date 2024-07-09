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
  { name: 'home', title: '开发指南', routerLink: { name: 'StartInstall' } },
  {
    name: 'formGroup',
    title: '表单文档',
    children: [
      { name: 'form', title: '表单', routerLink: { name: 'ComponentFormBasicsBase' } }
    ]
  },
  {
    name: 'tableGroup',
    title: '表格文档',
    children: [
      { name: 'table', title: '基础表格', routerLink: { name: 'ComponentTableBaseBasic' } },
      { name: 'grid', title: '配置式表格', routerLink: { name: 'ComponentGridBaseBasic' } }
    ]
  }
])
</script>
