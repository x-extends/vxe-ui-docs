<template>
  <div>
    <div style="width: 260px;height: 200px;overflow: auto;">
      <vxe-menu v-model="selectNav" :loading="loading" :options="navList" @click="clickEvent"></vxe-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeMenuPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const navList: VxeMenuPropTypes.Options = []

    return {
      loading: false,
      selectNav: 'user',
      navList
    }
  },
  methods: {
    loadList () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.navList = [
          { name: 'home', title: '首页' },
          {
            name: 'user',
            title: '个人中心',
            children: [
              { name: 'changePassword', title: '修改密码' }
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
      }, 3000)
    },
    clickEvent ({ menu }) {
      console.log(menu.name)
    }
  },
  created () {
    this.loadList()
  }
})
</script>
