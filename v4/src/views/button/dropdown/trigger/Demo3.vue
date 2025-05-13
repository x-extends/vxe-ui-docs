<template>
  <div>
    <vxe-button ref="buttonRef" trigger="manual" :options="downBtns">手动模式</vxe-button>
    <vxe-button @click="openEvent">打开</vxe-button>
    <vxe-button @click="closeEvent">关闭</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeButtonInstance, VxeButtonPropTypes } from 'vxe-pc-ui'

const buttonRef = ref<VxeButtonInstance>()

const downBtns = ref<VxeButtonPropTypes.Options>([
  { name: '1', content: '下拉按钮1' },
  { name: '2', content: '下拉按钮2' },
  { name: '3', content: '下拉按钮3' }
])

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
