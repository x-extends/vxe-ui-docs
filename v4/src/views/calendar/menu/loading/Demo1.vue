<template>
  <div>
    <vxe-calendar v-model="val" :menu-config="menuConfig" @menu-click="menuClickEvent"></vxe-calendar>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeUI, VxeCalendarPropTypes, VxeCalendarEvents } from 'vxe-pc-ui'

const val = ref('')

const menuConfig = reactive<VxeCalendarPropTypes.MenuConfig>({
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

const menuClickEvent: VxeCalendarEvents.MenuClick = ({ menu }) => {
  VxeUI.modal.message({
    content: `点击了 code=${menu.code}`,
    status: 'success'
  })
}
</script>
