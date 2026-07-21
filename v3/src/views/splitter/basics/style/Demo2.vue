<template>
  <div>
    <vxe-splitter height="300" :style="splitterStyle" :action-config="actionConfig" border vertical>
      <vxe-splitter-panel height="100">
        <template #default>
          <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <vxe-splitter :action-config="actionConfig" border>
          <vxe-splitter-panel width="100">
            <template #default>
              <div style="height: 100%;background-color: #e1f3e5;">左下角</div>
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

<script lang="ts">
import Vue from 'vue'
import { VxeSplitterPropTypes } from 'vxe-pc-ui'

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

    return {
      actionConfig,
      splitterStyle
    }
  }
})
</script>
