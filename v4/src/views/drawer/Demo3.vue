<template>
  <div>
    <vxe-button content="自定义插槽模板" @click="showDrawer = true"></vxe-button>
    <vxe-drawer v-model="showDrawer" title="标题" position="left">
      <template #default>
        <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
    </vxe-drawer>

    <vxe-button content="自定义JSX模板" @click="openSlotDrawer"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const showDrawer = ref(false)

const openSlotDrawer = () => {
  VxeUI.drawer.open({
    position: 'left',
    title: '标题',
    slots: {
      default () {
        return <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      }
    }
  })
}
</script>
