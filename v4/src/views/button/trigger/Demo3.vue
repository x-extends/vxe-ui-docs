<template>
  <div>
    <vxe-button ref="buttonRef" trigger="manual">
      <template #default>手动模式</template>
      <template #dropdowns>
        <vxe-button mode="text" content="下拉按钮1"></vxe-button>
        <vxe-button mode="text" content="下拉按钮2"></vxe-button>
        <vxe-button mode="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
    <vxe-button @click="openEvent">打开</vxe-button>
    <vxe-button @click="closeEvent">关闭</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeButtonInstance } from 'vxe-pc-ui'

const buttonRef = ref<VxeButtonInstance>()

const openEvent = () => {
  const $button = buttonRef.value
  if ($button) {
    $button.openPanel()
  }
}

const closeEvent = () => {
  const $button = buttonRef.value
  if ($button) {
    $button.closePanel()
  }
}
</script>
