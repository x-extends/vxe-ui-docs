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
      { code: '1', name: '新增', disabled: false, visible: true },
      { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill', disabled: false, visible: true },
      {
        code: '3',
        name: '审批',
        disabled: false,
        visible: true,
        children: [
          { code: '4', name: '通过', prefixIcon: 'vxe-icon-check', disabled: false, visible: true },
          { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close', disabled: false, visible: true }
        ]
      },
      { code: '6', name: '查看', prefixIcon: 'vxe-icon-link', disabled: false, visible: true }
    ],
    [
      {
        code: '11',
        name: '更多操作',
        disabled: false,
        visible: true,
        children: [
          { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback', disabled: false, visible: true },
          { code: '14', name: '取消' }
        ]
      },
      { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo', disabled: false, visible: true }
    ]
  ],
  visibleMethod ({ date, options }) {
    options.forEach(list => {
      list.forEach(item => {
        if (item.code === '1' || item.code === '3') {
          item.disabled = date.getDay() === 1 // 周一
        }
        if (item.code === '4' || item.code === '11') {
          item.visible = date.getDay() === 3 // 周三
        }
      })
    })
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
