<template>
  <div>
    <vxe-switch v-model="actionConfig.showPrevButton"></vxe-switch>
    <vxe-switch v-model="actionConfig.showNextButton"></vxe-switch>

    <vxe-split v-bind="splitOptions1">
      <template #leftContent>
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <vxe-split v-bind="splitOptions2">
          <template #topContent>
            <div style="height: 100%;background-color: #e1f3e5;">右上角</div>
          </template>
          <template #bottomContent>
            <div style="height: 600px;background-color: #d8d8f9;">右下角</div>
          </template>
        </vxe-split>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitterProps, VxeSplitterPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const actionConfig: VxeSplitterPropTypes.ActionConfig = {
      showPrevButton: true,
      showNextButton: true
    }

    const splitOptions1: VxeSplitterProps = {
      height: 300,
      border: true,
      actionConfig,
      items: [
        { width: 100, slots: { default: 'leftContent' } },
        { slots: { default: 'rightContent' } }
      ]
    }

    const splitOptions2: VxeSplitterProps = {
      border: true,
      vertical: true,
      actionConfig,
      items: [
        { height: 100, slots: { default: 'topContent' } },
        { slots: { default: 'bottomContent' } }
      ]
    }

    return {
      actionConfig,
      splitOptions1,
      splitOptions2
    }
  }
})
</script>
