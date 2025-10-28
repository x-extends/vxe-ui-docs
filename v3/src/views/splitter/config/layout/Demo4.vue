<template>
  <div>
    <vxe-split v-bind="splitOptions1">
      <template #topContent>
        <vxe-split v-bind="splitOptions2">
          <template #leftContent>
            <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
          </template>
          <template #centerContent>
            <div style="height: 100%;background-color: #e2f9d8;">中</div>
          </template>
          <template #rightContent>
            <div style="height: 100%;background-color: #d8d8f9;">右侧</div>
          </template>
        </vxe-split>
      </template>
      <template #bottomContent>
        <div style="height: 100%;background-color: #f3d0ec;">底部</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitterProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitOptions1: VxeSplitterProps = {
      height: 300,
      border: true,
      vertical: true,
      items: [
        { slots: { default: 'topContent' } },
        { height: 100, slots: { default: 'bottomContent' } }
      ]
    }

    const splitOptions2: VxeSplitterProps = {
      border: true,
      items: [
        { width: 100, slots: { default: 'leftContent' } },
        { slots: { default: 'centerContent' } },
        { width: 140, slots: { default: 'rightContent' } }
      ]
    }

    return {
      splitOptions1,
      splitOptions2
    }
  }
})
</script>
