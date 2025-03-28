<template>
  <div>
    <vxe-split v-bind="splitOptions1">
      <template #leftContent>
        <vxe-split v-bind="splitOptions2">
          <template #topContent>
            <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
          </template>
          <template #bottomContent>
            <div style="height: 100%;background-color: #d8d8f9;">底部</div>
          </template>
        </vxe-split>
      </template>
      <template #rightContent>
        <div style="height: 100%;background-color: #f3d0ec;">右侧</div>
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
        { slots: { default: 'leftContent' } },
        { width: 200, slots: { default: 'rightContent' } }
      ]
    }

    const splitOptions2: VxeSplitProps = {
      border: true,
      vertical: true,
      items: [
        { slots: { default: 'topContent' } },
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
