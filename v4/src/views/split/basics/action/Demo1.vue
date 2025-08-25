<template>
  <div>
    <vxe-split height="300" :action-config="actionConfig" border>
      <vxe-split-pane width="100">
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </vxe-split-pane>
      <vxe-split-pane>
        <div style="height: 600px;background-color: #d8d8f9;">右侧</div>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitPropTypes } from 'vxe-pc-ui'

const actionConfig = reactive<VxeSplitPropTypes.ActionConfig>({
  showPrevButton: true,
  showNextButton: true
})
</script>
