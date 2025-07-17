<template>
  <div>
    <vxe-button status="primary" @click="collapseEvent">切换折叠</vxe-button>

    <vxe-layout-container>
      <vxe-layout-aside :collapsed="collapsed">
        <vxe-menu v-model="selectNav" :options="navList" accordion collapse-fixed @click="clickEvent"></vxe-menu>
      </vxe-layout-aside>
      <vxe-layout-body>
        <div>内容内容内容内容</div>
      </vxe-layout-body>
    </vxe-layout-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeMenuPropTypes, VxeMenuEvents } from 'vxe-pc-ui'

const selectNav = ref('user')
const collapsed = ref(false)
const navList = ref<VxeMenuPropTypes.Options>([
  { name: 'home', title: '首页', icon: 'vxe-icon-home' },
  {
    name: 'user',
    title: '个人中心',
    icon: 'vxe-icon-github-fill',
    children: [
      { name: 'changePassword', title: '修改密码', icon: 'vxe-icon-goods' }
    ]
  },
  {
    name: 'group',
    title: '商品分类',
    icon: 'vxe-icon-cloud-download',
    children: [
      {
        name: 'computerOffice',
        title: '电脑办公',
        icon: 'vxe-icon-chart-pie',
        children: [
          { name: 'notebook', title: '笔记本', icon: 'vxe-icon-bell' },
          { name: 'keyboard', title: '键盘', icon: 'vxe-icon-heavy-rain' }
        ]
      },
      {
        name: 'mobile',
        title: '手机',
        icon: 'vxe-icon-company',
        children: [
          { name: 'xiaomi', title: '小米', icon: 'vxe-icon-chart-bar-x' },
          { name: 'huawei', title: '华为', icon: 'vxe-icon-sunny' },
          { name: 'oppo', title: 'OPPO', icon: 'vxe-icon-custom-column' }
        ]
      },
      {
        name: 'homeAppliances',
        title: '家电',
        icon: 'vxe-icon-flag-fill',
        children: [
          { name: 'washingMachine', title: '洗衣机', icon: 'vxe-icon-microphone-fill' },
          { name: 'fridge', title: '冰箱', icon: 'vxe-icon-envelope-open-fill' }
        ]
      }
    ]
  },
  {
    name: 'system',
    title: '系统设置',
    icon: 'vxe-icon-rmb',
    children: [
      { name: 'menu', title: '菜单配置', icon: 'vxe-icon-setting' },
      { name: 'permission', title: '权限配置', icon: 'vxe-icon-question-circle' }
    ]
  }
])

const collapseEvent = () => {
  collapsed.value = !collapsed.value
}

const clickEvent: VxeMenuEvents.Click = ({ menu }) => {
  console.log(menu.name)
}
</script>
