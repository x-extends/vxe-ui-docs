<template>
  <div>
    <vxe-split v-bind="splitOptions">
      <template #leftContent>
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <div style="height: 100%;background-color: #d8d8f9;">右侧</div>
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
  items: [
    { slots: { default: 'leftContent' } },
    { slots: { default: 'rightContent' } }
  ]
})
</script>
