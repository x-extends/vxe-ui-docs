<template>
  <div>
    <div style="width: 260px">
      <vxe-menu v-model="selectNav" :options="navList" @click="clickEvent">
        <template #homeTitle="{ currentMenu }">
          <span style="color: red">🔥{{ currentMenu.title }}</span>
        </template>

        <template #changePasswordTitle="{ currentMenu }">
          <span style="color: orange">{{ currentMenu.title }}🔥</span>
        </template>
      </vxe-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeMenuPropTypes, VxeMenuEvents } from 'vxe-pc-ui'

const selectNav = ref('user')
const navList = ref<VxeMenuPropTypes.Options>([
  { name: 'home', title: '首页', slots: { title: 'homeTitle' } },
  {
    name: 'user',
    title: '个人中心',
    children: [
      { name: 'changePassword', title: '修改密码', slots: { title: 'changePasswordTitle' } }
    ]
  },
  {
    name: 'system',
    title: '系统设置',
    children: [
      { name: 'menu', title: '菜单配置' },
      { name: 'permission', title: '权限配置' }
    ]
  }
])

const clickEvent: VxeMenuEvents.Click = ({ currentMenu }) => {
  console.log(currentMenu.name)
}
</script>
