<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const openEvent = () => {
  VxeUI.drawer.open({
    title: '标题2',
    width: 600,
    padding: false,
    slots: {
      default () {
        return <div>
          <div>显示区无边距</div>
        </div>
      }
    }
  })
}
</script>
