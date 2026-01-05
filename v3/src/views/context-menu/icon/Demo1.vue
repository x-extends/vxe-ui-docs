<template>
  <div>
    <vxe-button @click="showMenuEvent">显示</vxe-button>
    <vxe-context-menu v-model="showMenu" v-bind="menuOptions"></vxe-context-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeContextMenuProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const showMenu = false
    const menuOptions: VxeContextMenuProps = {
      x: 0,
      y: 0,
      options: [
        [
          { code: '11', name: '新增', prefixIcon: 'vxe-icon-add' },
          { code: '22', name: '删除', prefixIcon: 'vxe-icon-delete' },
          {
            code: '33',
            name: '审批',
            prefixIcon: 'vxe-icon-empty',
            children: [
              { code: '44', name: '通过', prefixConfig: { content: 'Ctrl+R' } },
              { code: '55', name: '不通过', prefixConfig: { content: 'Ctrl+X' } }
            ]
          },
          { code: '66', name: '查看', prefixIcon: 'vxe-icon-link' }
        ],
        [
          {
            code: '111',
            name: '更多操作',
            children: [
              { code: '113', name: '编辑', prefixConfig: { content: 'Ctrl+V' } },
              { code: '114', name: '取消', prefixConfig: { content: 'Ctrl+C' } }
            ]
          },
          { code: '110', name: '驳回', prefixIcon: 'vxe-icon-add' }
        ]
      ]
    }

    return {
      showMenu,
      menuOptions
    }
  },
  methods: {
    showMenuEvent ({ $event }) {
      this.menuOptions.x = $event.clientX
      this.menuOptions.y = $event.clientY
      this.showMenu = true
    }
  }
})
</script>
