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
      { code: '1', name: '新增', visible: true },
      { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill', visible: false },
      {
        code: '3',
        name: '审批',
        visible: true,
        children: [
          { code: '4', name: '通过', prefixIcon: 'vxe-icon-check', visible: true },
          { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close', visible: true }
        ]
      },
      { code: '6', name: '查看', prefixIcon: 'vxe-icon-link', visible: false }
    ],
    [
      {
        code: '11',
        name: '更多操作',
        visible: true,
        children: [
          { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback', visible: false },
          { code: '14', name: '取消', visible: true }
        ]
      },
      { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo', visible: true }
    ]
  ]
})

const menuClickEvent: VxeCalendarEvents.MenuClick = ({ option }) => {
  VxeUI.modal.message({
    content: `点击了 code=${option.code}`,
    status: 'success'
  })
}
</script>
