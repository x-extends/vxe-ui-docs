<template>
  <div>
    <vxe-radio-group v-model="splitOptions.actionConfig.direction">
      <vxe-radio-button label="prev" content="向左"></vxe-radio-button>
      <vxe-radio-button label="next" content="向右"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-split v-bind="splitOptions">
      <template #leftContent>
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <div style="height: 600px;background-color: #d8d8f9;">右侧</div>
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
      actionConfig: {
        direction: 'next'
      },
      items: [
        { width: 100, slots: { default: 'leftContent' } },
        { showAction: true, slots: { default: 'rightContent' } }
      ]
    }

    return {
      splitOptions
    }
  }
})
</script>
