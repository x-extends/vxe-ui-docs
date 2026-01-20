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

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeMenuPropTypes, VxeMenuEvents } from 'vxe-pc-ui'

const selectNav = ref('user')
const navList = ref<VxeMenuPropTypes.Options>([
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
])

const menuConfig = reactive<VxeMenuPropTypes.MenuConfig>({
  options: [
    [
      { code: '1', name: '新增', loading: false, visible: true },
      { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill', loading: false, visible: true },
      {
        code: '3',
        name: '审批',
        loading: false,
        visible: true,
        children: [
          { code: '4', name: '通过', prefixIcon: 'vxe-icon-check', loading: false, visible: true },
          { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close', loading: false, visible: true }
        ]
      },
      { code: '6', name: '查看', prefixIcon: 'vxe-icon-link', loading: false, visible: true }
    ],
    [
      {
        code: '11',
        name: '更多操作',
        loading: false,
        visible: true,
        children: [
          { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback', loading: false, visible: true },
          { code: '14', name: '取消' }
        ]
      },
      { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo', loading: false, visible: true }
    ]
  ],
  visibleMethod ({ options }) {
    options.forEach(list => {
      list.forEach(item => {
        if (item.code === '1' || item.code === '3') {
          item.loading = true
        }
        if (item.code === '4' || item.code === '11') {
          item.loading = true
        }
      })
    })

    // 模拟后端异步
    setTimeout(() => {
      options.forEach(list => {
        list.forEach(item => {
          if (item.code === '1' || item.code === '3') {
            item.visible = false
            item.loading = false
          }
          if (item.code === '4' || item.code === '11') {
            item.visible = false
            item.loading = false
          }
        })
      })
    }, 300)
    return true
  }
})

const menuClickEvent: VxeMenuEvents.MenuClick = ({ menu }) => {
  VxeUI.modal.message({
    content: `点击了 code=${menu.code}`,
    status: 'success'
  })
}
</script>
