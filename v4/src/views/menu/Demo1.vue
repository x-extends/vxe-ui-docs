<template>
  <div>
    <div style="width: 260px">
      <vxe-menu v-model="selectNav" :options="navList"></vxe-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectNav = ref('user')
const navList = ref([
  { name: 'home', title: '首页', icon: 'vxe-icon-home' },
  {
    name: 'user',
    title: '个人中心',
    icon: 'vxe-icon-user',
    children: [
      { name: 'changePassword', title: '修改密码' }
    ]
  },
  {
    name: 'system',
    title: '系统设置',
    icon: 'vxe-icon-setting',
    children: [
      { name: 'menu', title: '菜单配置' },
      { name: 'permission', title: '权限配置' }
    ]
  }
])
</script>
