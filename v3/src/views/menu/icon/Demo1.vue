<template>
  <div>
    <div style="width: 260px">
      <vxe-menu v-model="selectNav" :options="navList" @click="clickEvent"></vxe-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeMenuPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const navList: VxeMenuPropTypes.Options = [
      { name: 'home', title: '首页', icon: 'vxe-icon-home' },
      {
        name: 'user',
        title: '个人中心',
        icon: 'vxe-icon-user',
        children: [
          { name: 'changePassword', icon: 'vxe-icon-lock', title: '修改密码' }
        ]
      },
      {
        name: 'system',
        title: '系统设置',
        icon: 'vxe-icon-setting',
        children: [
          { name: 'menu', icon: 'vxe-icon-menu', title: '菜单配置' },
          { name: 'permission', icon: 'vxe-icon-user', title: '权限配置' }
        ]
      }
    ]

    return {
      selectNav: 'user',
      navList
    }
  },
  methods: {
    clickEvent ({ currentMenu }) {
      console.log(currentMenu.name)
    }
  }
})
</script>
