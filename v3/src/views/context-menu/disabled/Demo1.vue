<template>
  <div>
    <vxe-button @click="showMenuEvent">显示</vxe-button>
    <vxe-context-menu
      v-model="showMenu"
      v-bind="menuOptions"
      @option-click="optionClickEvent">
    </vxe-context-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeContextMenuProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const showMenu = false
    const menuOptions: VxeContextMenuProps = {
      x: 0,
      y: 0,
      options: [
        [
          { code: '11', name: '新增(Ctrl+V)', disabled: false },
          { code: '22', name: '删除(Ctrl+T)', prefixIcon: 'vxe-icon-delete', disabled: true },
          {
            code: '33',
            name: '审批',
            disabled: false,
            children: [
              { code: '44', name: '通过', prefixIcon: 'vxe-icon-check', disabled: false },
              { code: '55', name: '不通过', prefixIcon: 'vxe-icon-close', disabled: false }
            ]
          },
          { code: '66', name: '查看(Ctrl+X)', prefixIcon: 'vxe-icon-link', disabled: true }
        ],
        [
          {
            code: '111',
            name: '更多操作',
            disabled: false,
            children: [
              { code: '113', name: '编辑(Ctrl+Y)', disabled: true },
              { code: '114', name: '取消(Ctrl+B)', disabled: false }
            ]
          },
          { code: '110', name: '驳回(Ctrl+Z)', disabled: true }
        ]
      ]
    }

    return {
      showMenu,
      menuOptions
    }
  },
  methods: {
    optionClickEvent ({ option }) {
      VxeUI.modal.message({
        content: `点击了 ${option.code}`,
        status: 'success'
      })
    },
    showMenuEvent ({ $event }) {
      this.menuOptions.x = $event.clientX
      this.menuOptions.y = $event.clientY
      this.showMenu = true
    }
  }
})
</script>
