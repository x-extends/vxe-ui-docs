<template>
  <div>
    <vxe-radio-group v-model="splitOptions.actionConfig.direction">
      <vxe-radio-button label="prev" content="向左"></vxe-radio-button>
      <vxe-radio-button label="next" content="向右"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-split v-bind="splitOptions">
      <template #topContent>
        <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
      </template>
      <template #bottomContent>
        <div style="height: 600px;background-color: #d8d8f9;">底部</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitProps, VxeSplitPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitOptions: VxeSplitProps & { actionConfig: VxeSplitPropTypes.ActionConfig } = {
      height: 300,
      border: true,
      vertical: true,
      actionConfig: {
        direction: 'next'
      },
      items: [
        { width: 100, slots: { default: 'topContent' } },
        { showAction: true, slots: { default: 'bottomContent' } }
      ]
    }

    return {
      splitOptions
    }
  }
})
</script>
