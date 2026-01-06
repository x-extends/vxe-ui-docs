<template>
  <div>
    <vxe-button @contextmenu="showMenuEvent">右键显示</vxe-button>
    <vxe-context-menu v-model="showMenu" v-bind="menuOptions" v-on="menuEvents"></vxe-context-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeUI, VxeContextMenuProps, VxeButtonEvents, VxeContextMenuListeners } from 'vxe-pc-ui'

const showMenu = ref(false)
const menuOptions = reactive<VxeContextMenuProps>({
  x: 0,
  y: 0,
  options: [
    [
      { code: '11', name: '新增(Ctrl+V)' },
      { code: '22', name: '删除(Ctrl+T)', prefixIcon: 'vxe-icon-delete', className: 'my-cm-style-red' },
      {
        code: '33',
        name: '审批',
        children: [
          { code: '44', name: '通过', prefixIcon: 'vxe-icon-check', className: 'my-cm-style-blue' },
          { code: '55', name: '不通过', prefixIcon: 'vxe-icon-close' }
        ]
      },
      { code: '66', name: '查看(Ctrl+X)', prefixIcon: 'vxe-icon-link' }
    ],
    [
      {
        code: '111',
        name: '更多操作',
        children: [
          { code: '113', name: '编辑(Ctrl+Y)' },
          { code: '114', name: '取消(Ctrl+B)' }
        ]
      },
      { code: '110', name: '驳回(Ctrl+Z)', className: 'my-cm-style-orange' }
    ]
  ]
})

const menuEvents: VxeContextMenuListeners = {
  optionClick ({ option }) {
    VxeUI.modal.message({
      content: `点击了 ${option.code}`,
      status: 'success'
    })
  }
}

const showMenuEvent: VxeButtonEvents.Click = ({ $event }) => {
  menuOptions.x = $event.clientX
  menuOptions.y = $event.clientY
  showMenu.value = true
}
</script>

<style lang="scss">
.my-cm-style-red {
  color: red;
}
.my-cm-style-blue {
  color: blue;
}
.my-cm-style-orange {
  color: orange;
}
</style>
