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

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitProps } from 'vxe-pc-ui'

const splitOptions1 = reactive<VxeSplitProps>({
  height: 300,
  border: true,
  items: [
    { slots: { default: 'leftContent' } },
    { width: 200, slots: { default: 'rightContent' } }
  ]
})

const splitOptions2 = reactive<VxeSplitProps>({
  border: true,
  vertical: true,
  items: [
    { width: 100, slots: { default: 'topContent' } },
    { slots: { default: 'bottomContent' } }
  ]
})
</script>
