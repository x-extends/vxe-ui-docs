<template>
  <div>
    <vxe-splitter v-bind="splitOptions">
      <template #topContent>
        <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
      </template>
      <template #bottomContent>
        <div style="height: 100%;background-color: #d8d8f9;">底部</div>
      </template>
    </vxe-splitter>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitterProps } from 'vxe-pc-ui'

const splitOptions = reactive<VxeSplitterProps>({
  height: 300,
  border: true,
  vertical: true,
  items: [
    { height: 100, slots: { default: 'topContent' } },
    { slots: { default: 'bottomContent' } }
  ]
})
</script>
