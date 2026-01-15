<template>
  <div>
    <vxe-calendar v-model="val" :menu-config="menuConfig" @menu-click="menuClickEvent"></vxe-calendar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeCalendarPropTypes, VxeCalendarEvents } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const menuConfig: VxeCalendarPropTypes.MenuConfig = {
      options: [
        [
          { code: '1', name: '新增', disabled: false },
          { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill', disabled: true },
          {
            code: '3',
            name: '审批',
            children: [
              { code: '4', name: '通过', prefixIcon: 'vxe-icon-check', disabled: false },
              { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close', disabled: false }
            ]
          },
          { code: '6', name: '查看', prefixIcon: 'vxe-icon-link', disabled: false }
        ],
        [
          {
            code: '11',
            name: '更多操作',
            disabled: false,
            children: [
              { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback', disabled: true },
              { code: '14', name: '取消', disabled: false }
            ]
          },
          { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo', disabled: true }
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
    menuClickEvent ({ option }) {
      VxeUI.modal.message({
        content: `点击了 code=${option.code}`,
        status: 'success'
      })
    }
  }
})
</script>
