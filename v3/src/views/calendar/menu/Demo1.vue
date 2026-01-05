<template>
  <div>
    <div @contextmenu="showMenuEvent">
      <vxe-calendar v-model="val"></vxe-calendar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      val: ''
    }
  },
  methods: {
    showMenuEvent (evnt: MouseEvent) {
      VxeUI.contextMenu.openByEvent(evnt, {
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
        ],
        events: {
          optionClick ({ option }) {
            VxeUI.modal.message({
              content: `点击了 ${option.code}`,
              status: 'success'
            })
          }
        }
      })
    }
  }
})
</script>
