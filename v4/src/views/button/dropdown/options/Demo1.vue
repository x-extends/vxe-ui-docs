<template>
  <div>
    <vxe-button :options="downBtns" @dropdown-click="dropdownClickEvent">下拉按钮</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeButtonPropTypes, VxeButtonEvents } from 'vxe-pc-ui'

const downBtns = ref<VxeButtonPropTypes.Options>([
  { name: '1', content: '下拉按钮1' },
  { name: '2', content: '下拉按钮2' },
  { name: '3', content: '下拉按钮3' }
])

const dropdownClickEvent: VxeButtonEvents.DropdownClick = (params) => {
  VxeUI.modal.message({
    content: `点击了 ${params.name}`
  })
}
</script>
