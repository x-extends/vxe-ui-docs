<template>
  <div>
    <vxe-pulldown trigger="click" :options="pullOptions" show-popup-shadow @option-click="optionClickEvent">
      <template #default>
        <vxe-button mode="text">下拉按钮</vxe-button>
        <vxe-icon name="arrow-down"></vxe-icon>
      </template>

      <template #header>
        <vxe-row style="background-color: chartreuse;">
          <vxe-col>
            <vxe-button mode="text">按钮1</vxe-button>
          </vxe-col>
          <vxe-col>
            <vxe-button mode="text">按钮2</vxe-button>
          </vxe-col>
        </vxe-row>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxePulldownPropTypes, VxePulldownEvents } from 'vxe-pc-ui'

const pullOptions = ref<VxePulldownPropTypes.Options>([
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' },
  { label: '选项6', value: '6' }
])

const optionClickEvent: VxePulldownEvents.OptionClick = ({ option }) => {
  VxeUI.modal.message({
    content: `点击了${option.value}`,
    status: 'success'
  })
}
</script>
