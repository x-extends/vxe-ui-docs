<template>
  <div>
    <div style="width: 260px">
      <vxe-menu v-model="selectNav" :options="navList" accordion @click="clickEvent"></vxe-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeMenuPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const navList: VxeMenuPropTypes.Options = [
      { name: 'home', title: '首页' },
      {
        name: 'user',
        title: '个人中心',
        children: [
          { name: 'changePassword', title: '修改密码' }
        ]
      },
      {
        name: 'group',
        title: '商品分类',
        children: [
          {
            name: 'computerOffice',
            title: '电脑办公',
            children: [
              { name: 'notebook', title: '笔记本' },
              { name: 'keyboard', title: '键盘' }
            ]
          },
          {
            name: 'mobile',
            title: '手机',
            children: [
              { name: 'xiaomi', title: '小米' },
              { name: 'huawei', title: '华为' },
              { name: 'oppo', title: 'OPPO' }
            ]
          },
          {
            name: 'homeAppliances',
            title: '家电',
            children: [
              { name: 'washingMachine', title: '洗衣机' },
              { name: 'fridge', title: '冰箱' }
            ]
          }
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
