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
})

const menuClickEvent: VxeCalendarEvents.MenuClick = ({ menu }) => {
  VxeUI.modal.message({
    content: `点击了 code=${menu.code}`,
    status: 'success'
  })
}
</script>
