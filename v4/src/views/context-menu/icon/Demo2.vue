<template>
  <div>
    <vxe-button @click="showMenuEvent">显示</vxe-button>
    <vxe-context-menu v-model="showMenu" v-bind="menuOptions"></vxe-context-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeContextMenuProps, VxeButtonEvents } from 'vxe-pc-ui'

const showMenu = ref(false)
const menuOptions = reactive<VxeContextMenuProps>({
  x: 0,
  y: 0,
  options: [
    [
      { code: '11', name: '新增', suffixConfig: { content: 'Ctrl+R' } },
      { code: '22', name: '删除', suffixConfig: { content: 'Ctrl+V' } },
      {
        code: '33',
        name: '审批',
        children: [
          { code: '44', name: '通过', prefixIcon: 'vxe-icon-check' },
          { code: '55', name: '不通过', prefixIcon: 'vxe-icon-close' }
        ]
      },
      { code: '66', name: '查看', suffixConfig: { content: 'Ctrl+Y' } }
    ],
    [
      {
        code: '111',
        name: '更多操作',
        children: [
          { code: '113', name: '编辑', prefixIcon: 'vxe-icon-edit' },
          { code: '114', name: '取消', prefixIcon: 'vxe-icon-undo' }
        ]
      },
      { code: '110', name: '驳回', suffixConfig: { content: 'Ctrl+Z' } }
    ]
  ]
})

const showMenuEvent: VxeButtonEvents.Click = ({ $event }) => {
  menuOptions.x = $event.clientX
  menuOptions.y = $event.clientY
  showMenu.value = true
}
</script>
