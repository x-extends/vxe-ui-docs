<template>
  <div>
    <vxe-radio-group v-model="actionConfig.direction">
      <vxe-radio-button label="prev" content="向左"></vxe-radio-button>
      <vxe-radio-button label="next" content="向右"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-split height="300" :action-config="actionConfig" border>
      <vxe-split-pane width="100" show-action>
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </vxe-split-pane>
      <vxe-split-pane show-action>
        <div style="height: 600px;background-color: #d8d8f9;">右侧</div>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitPropTypes } from 'vxe-pc-ui'

const actionConfig = reactive<VxeSplitPropTypes.ActionConfig>({
  direction: 'next'
})
</script>
