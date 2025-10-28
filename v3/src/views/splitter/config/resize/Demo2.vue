<template>
  <div>
    <vxe-splitter v-bind="splitOptions1">
      <template #leftContent>
        <vxe-splitter v-bind="splitOptions2">
          <template #topContent>
            <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
          </template>
          <template #bottomContent>
            <div style="height: 100%;background-color: #d8d8f9;">底部</div>
          </template>
        </vxe-splitter>
      </template>
      <template #rightContent>
        <div style="height: 100%;background-color: #f3d0ec;">右侧</div>
      </template>
    </vxe-splitter>
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
      resize: true,
      resizeConfig: {
        immediate: true
      },
      items: [
        { slots: { default: 'leftContent' } },
        { width: 200, slots: { default: 'rightContent' } }
      ]
    }

    const splitOptions2: VxeSplitterProps = {
      border: true,
      vertical: true,
      resize: true,
      resizeConfig: {
        immediate: true
      },
      items: [
        { width: 100, slots: { default: 'topContent' } },
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
