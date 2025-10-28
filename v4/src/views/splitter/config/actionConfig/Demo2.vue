<template>
  <div>
    <vxe-switch v-model="actionConfig.showPrevButton"></vxe-switch>
    <vxe-switch v-model="actionConfig.showNextButton"></vxe-switch>

    <vxe-splitter v-bind="splitOptions1">
      <template #topContent>
        <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
      </template>
      <template #bottomContent>
        <vxe-splitter v-bind="splitOptions2">
          <template #leftContent>
            <div style="height: 100%;background-color: #e1f3e5;">左下角</div>
          </template>
          <template #rightContent>
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

const actionConfig = reactive<VxeSplitterPropTypes.ActionConfig>({
  showPrevButton: true,
  showNextButton: true
})

const splitOptions1 = reactive<VxeSplitterProps>({
  height: 300,
  border: true,
  vertical: true,
  actionConfig,
  items: [
    { height: 100, slots: { default: 'topContent' } },
    { slots: { default: 'bottomContent' } }
  ]
})

const splitOptions2 = reactive<VxeSplitterProps>({
  border: true,
  actionConfig,
  items: [
    { width: 100, slots: { default: 'leftContent' } },
    { slots: { default: 'rightContent' } }
  ]
})
</script>
