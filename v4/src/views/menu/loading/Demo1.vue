<template>
  <div>
    <div style="width: 260px;height: 200px;overflow: auto;">
      <vxe-menu v-model="selectNav" :loading="loading" :options="navList" @click="clickEvent"></vxe-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeMenuPropTypes, VxeMenuEvents } from 'vxe-pc-ui'

const selectNav = ref('user')
const loading = ref(false)
const navList = ref<VxeMenuPropTypes.Options>([])

const loadList = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    navList.value = [
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
}

const clickEvent: VxeMenuEvents.Click = ({ menu }) => {
  console.log(menu.name)
}

loadList()
</script>
