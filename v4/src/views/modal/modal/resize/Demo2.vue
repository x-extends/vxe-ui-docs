<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openEvent = () => {
  VxeUI.modal.open({
    title: '标题2',
    width: 600,
    height: 400,
    resize: true,
    slots: {
      default () {
        return <div>
          <div>鼠标点击窗口边缘，按住边缘拖拽调整窗口宽和高</div>
          <div>按住头部移动！</div>
          <div>按住左边距拖动！</div>
          <div>按住右边距拖动！</div>
          <div>按住底边距拖动！</div>
          <div>按住左下角拖动 ！</div>
          <div>按住右下角拖动！</div>
        </div>
      }
    }
  })
}
</script>
