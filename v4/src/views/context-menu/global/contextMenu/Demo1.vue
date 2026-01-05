<template>
  <div>
    <vxe-button @click="showMenuEvent1">open 显示</vxe-button>
    <vxe-button @click="showMenuEvent2">openByEvent 显示</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI, VxeButtonEvents } from 'vxe-pc-ui'

const showMenuEvent1: VxeButtonEvents.Click = ({ $event }) => {
  const x = $event.clientX
  const y = $event.clientY
  VxeUI.contextMenu.open({
    x,
    y,
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

const showMenuEvent2: VxeButtonEvents.Click = ({ $event }) => {
  VxeUI.contextMenu.openByEvent($event, {
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
</script>
