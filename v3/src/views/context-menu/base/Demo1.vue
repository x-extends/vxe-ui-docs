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
          { code: '11', name: '新增' },
          { code: '22', name: '删除' },
          {
            code: '33',
            name: '审批',
            children: [
              { code: '44', name: '通过' },
              { code: '55', name: '不通过' }
            ]
          },
          { code: '66', name: '查看' }
        ],
        [
          {
            code: '111',
            name: '更多操作',
            children: [
              { code: '113', name: '编辑' },
              { code: '114', name: '取消' }
            ]
          },
          { code: '110', name: '驳回' }
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
