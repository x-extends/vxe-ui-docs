<template>
  <div>
    <vxe-switch v-model="actionConfig.showPrevButton"></vxe-switch>
    <vxe-switch v-model="actionConfig.showNextButton"></vxe-switch>

    <vxe-split height="300" :action-config="actionConfig" border>
      <vxe-split-pane width="100">
        <template #default>
          <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
        </template>
      </vxe-split-pane>
      <vxe-split-pane>
        <vxe-split :action-config="actionConfig" border vertical>
          <vxe-split-pane height="100">
            <template #default>
              <div style="height: 100%;background-color: #e1f3e5;">右上角</div>
            </template>
          </vxe-split-pane>
          <vxe-split-pane>
            <template #default>
              <div style="height: 600px;background-color: #d8d8f9;">右下角</div>
            </template>
          </vxe-split-pane>
        </vxe-split>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const actionConfig: VxeSplitPropTypes.ActionConfig = {
      showPrevButton: true,
      showNextButton: true
    }

    return {
      actionConfig
    }
  }
})
</script>
