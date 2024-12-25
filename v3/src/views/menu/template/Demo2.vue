<template>
  <div>
    <div style="width: 260px">
      <vxe-menu v-model="selectNav" :options="navList" @click="clickEvent">
        <template #changePassword="{ option }">
          <span style="color: red">{{ option.title }}</span>
        </template>

        <template #permission="{ option }">
          <span style="color: orange">{{ option.title }}</span>
        </template>
      </vxe-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeMenuPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const navList: VxeMenuPropTypes.Options = [
      { name: 'home', title: '首页', slots: { default: 'permission' } },
      {
        name: 'user',
        title: '个人中心',
        children: [
          { name: 'changePassword', title: '修改密码', slots: { default: 'changePassword' } }
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
    ]

    return {
      selectNav: 'user',
      navList
    }
  },
  methods: {
    clickEvent ({ menu }) {
      console.log(menu.name)
    }
  }
})
</script>
