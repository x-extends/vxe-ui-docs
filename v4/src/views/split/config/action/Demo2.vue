<template>
  <div>
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

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitProps } from 'vxe-pc-ui'

const splitOptions = reactive<VxeSplitProps>({
  height: 300,
  border: true,
  vertical: true,
  items: [
    { width: 100, slots: { default: 'topContent' } },
    { showAction: true, slots: { default: 'bottomContent' } }
  ]
})
</script>
