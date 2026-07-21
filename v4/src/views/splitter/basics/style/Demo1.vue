<template>
  <div>

    <vxe-splitter height="300" :action-config="actionConfig" :bar-config="barConfig" border>
      <vxe-splitter-panel width="100">
        <template #default>
          <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <vxe-splitter :action-config="actionConfig" :bar-config="barConfig" border vertical>
          <vxe-splitter-panel height="100">
            <template #default>
              <div style="height: 100%;background-color: #e1f3e5;">右上角</div>
            </template>
          </vxe-splitter-panel>
          <vxe-splitter-panel>
            <template #default>
              <div style="height: 600px;background-color: #d8d8f9;">右下角</div>
            </template>
          </vxe-splitter-panel>
        </vxe-splitter>
      </vxe-splitter-panel>
    </vxe-splitter>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitterPropTypes } from 'vxe-pc-ui'

const actionConfig = reactive<VxeSplitterPropTypes.ActionConfig>({
  showPrevButton: true,
  showNextButton: true
})

const barConfig = reactive<VxeSplitterPropTypes.BarConfig>({
  width: 16,
  height: 16
})
</script>
