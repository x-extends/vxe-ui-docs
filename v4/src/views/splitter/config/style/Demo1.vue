<template>
  <div>
    <vxe-splitter v-bind="splitOptions1">
      <template #leftContent>
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <vxe-splitter v-bind="splitOptions2">
          <template #topContent>
            <div style="height: 100%;background-color: #e1f3e5;">右上角</div>
          </template>
          <template #bottomContent>
            <div style="height: 600px;background-color: #d8d8f9;">右下角</div>
          </template>
        </vxe-splitter>
      </template>
    </vxe-splitter>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitterProps, VxeSplitterPropTypes } from 'vxe-pc-ui'

const barConfig = reactive<VxeSplitterPropTypes.BarConfig>({
  width: 16,
  height: 16
})

const actionConfig = reactive<VxeSplitterPropTypes.ActionConfig>({
  showPrevButton: true,
  showNextButton: true
})

const splitOptions1 = reactive<VxeSplitterProps>({
  height: 300,
  border: true,
  barConfig,
  actionConfig,
  items: [
    { width: 100, slots: { default: 'leftContent' } },
    { slots: { default: 'rightContent' } }
  ]
})

const splitOptions2 = reactive<VxeSplitterProps>({
  border: true,
  vertical: true,
  barConfig,
  actionConfig,
  items: [
    { height: 100, slots: { default: 'topContent' } },
    { slots: { default: 'bottomContent' } }
  ]
})
</script>
