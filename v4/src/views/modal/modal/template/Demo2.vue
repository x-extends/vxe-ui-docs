<template>
  <div>
    <vxe-button content="自定义JSX模板" @click="openSlotModal()"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openSlotModal = () => {
  VxeUI.modal.open({
    title: '标题',
    showFooter: true,
    width: 600,
    height: 400,
    slots: {
      title () {
        return <span style="color: red">自定义标题</span>
      },
      corner () {
        return <span style="color: orange">自定义右侧</span>
      },
      default () {
        return <span>
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      },
      footer () {
        return <span style="color: blue">自定义底部</span>
      }
    }
  })
}
</script>
