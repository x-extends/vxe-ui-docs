<template>
  <div>
    <vxe-split v-bind="splitOptions1">
      <template #leftContent>
        <div style="height: 100%;background-color: #f3d0ec;">左侧</div>
      </template>
      <template #rightContent>
        <vxe-split v-bind="splitOptions2">
          <template #topContent>
            <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
          </template>
          <template #centerContent>
            <div style="height: 100%;background-color: #e2f9d8;">中</div>
          </template>
          <template #bottomContent>
            <div style="height: 100%;background-color: #d8d8f9;">底部</div>
          </template>
        </vxe-split>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitOptions1: VxeSplitProps = {
      height: 300,
      border: true,
      items: [
        { width: 200, slots: { default: 'leftContent' } },
        { slots: { default: 'rightContent' } }
      ]
    }

    const splitOptions2: VxeSplitProps = {
      border: true,
      vertical: true,
      items: [
        { slots: { default: 'topContent' } },
        { slots: { default: 'centerContent' } },
        { slots: { default: 'bottomContent' } }
      ]
    }

    return {
      splitOptions1,
      splitOptions2
    }
  }
})
</script>
