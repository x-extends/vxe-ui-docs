<template>
  <div>
    <div style="width: 260px">
      <vxe-menu
        v-model="selectNav"
        :options="navList"
        :menu-config="menuConfig"
        @menu-click="menuClickEvent">
      </vxe-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeMenuPropTypes } from 'vxe-pc-ui'

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

    const menuConfig: VxeMenuPropTypes.MenuConfig = {
      options: [
        [
          { code: '1', name: '新增' },
          { code: '2', name: '删除' },
          {
            code: '3',
            name: '审批',
            children: [
              { code: '4', name: '通过' },
              { code: '5', name: '不通过' }
            ]
          },
          { code: '6', name: '查看' }
        ],
        [
          {
            code: '11',
            name: '更多操作',
            children: [
              { code: '13', name: '编辑' },
              { code: '14', name: '取消' }
            ]
          },
          { code: '10', name: '驳回' }
        ]
      ]
    }

    const selectNav = 'user'

    return {
      selectNav,
      navList,
      menuConfig
    }
  },
  methods: {
    menuClickEvent ({ menu }) {
      VxeUI.modal.message({
        content: `点击了 code=${menu.code}`,
        status: 'success'
      })
    }
  }
})
</script>
