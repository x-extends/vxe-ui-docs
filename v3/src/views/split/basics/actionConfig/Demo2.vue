<template>
  <div>
    <vxe-radio-group v-model="actionConfig.direction">
      <vxe-radio-button label="prev" content="向左"></vxe-radio-button>
      <vxe-radio-button label="next" content="向右"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-split height="300" :action-config="actionConfig" border vertical>
      <vxe-split-pane height="100">
        <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
      </vxe-split-pane>
      <vxe-split-pane show-action>
        <div style="height: 600px;background-color: #d8d8f9;">底部</div>
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
      direction: 'next'
    }

    return {
      actionConfig
    }
  }
})
</script>
