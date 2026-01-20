<template>
  <div>
    <vxe-calendar v-model="val" :menu-config="menuConfig" @menu-click="menuClickEvent"></vxe-calendar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeCalendarPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const menuConfig: VxeCalendarPropTypes.MenuConfig = {
      options: [
        [
          { code: '1', name: '新增' },
          { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill' },
          {
            code: '3',
            name: '审批',
            children: [
              { code: '4', name: '通过', prefixIcon: 'vxe-icon-check' },
              { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close' }
            ]
          },
          { code: '6', name: '查看', prefixIcon: 'vxe-icon-link' }
        ],
        [
          {
            code: '11',
            name: '更多操作',
            children: [
              { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback' },
              { code: '14', name: '取消' }
            ]
          },
          { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo' }
        ]
      ]
    }

    const val = ''

    return {
      val,
      menuConfig
    }
  },
  methods: {
    menuClickEvent ({ menu }) {
      VxeUI.modal.message({
        content: `点击了 code=${menu.code}`,
        status: 'success'
      })
    }
  }
})
</script>
