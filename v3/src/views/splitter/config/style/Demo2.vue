<template>
  <div>
    <vxe-splitter v-bind="splitOptions1" :style="splitterStyle">
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

<script lang="ts">
import Vue from 'vue'
import { VxeSplitterProps, VxeSplitterPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitterStyle = {
      '--vxe-ui-splitter-handle-bar-horizontal-width': '8px',
      '--vxe-ui-splitter-handle-bar-vertical-height': '8px',
      '--vxe-ui-splitter-handle-bar-horizontal-action-btn-width': '30px',
      '--vxe-ui-splitter-handle-bar-horizontal-action-btn-height': '50px',
      '--vxe-ui-splitter-handle-bar-vertical-action-btn-width': '50px',
      '--vxe-ui-splitter-handle-bar-vertical-action-btn-height': '30px'
    }

    const actionConfig: VxeSplitterPropTypes.ActionConfig = {
      showPrevButton: true,
      showNextButton: true
    }

    const splitOptions1: VxeSplitterProps = {
      height: 300,
      border: true,
      vertical: true,
      actionConfig,
      items: [
        { height: 100, slots: { default: 'topContent' } },
        { slots: { default: 'bottomContent' } }
      ]
    }

    const splitOptions2: VxeSplitterProps = {
      border: true,
      actionConfig,
      items: [
        { width: 100, slots: { default: 'leftContent' } },
        { slots: { default: 'rightContent' } }
      ]
    }

    return {
      splitterStyle,
      actionConfig,
      splitOptions1,
      splitOptions2
    }
  }
})
</script>
