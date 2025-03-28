<template>
  <div>
    <vxe-split v-bind="splitOptions">
      <template #leftContent>
        <div style="background-color: #f3e1e1;">左</div>
      </template>
      <template #centerContent>
        <div style="background-color: #e2f9d8;">中</div>
      </template>
      <template #rightContent>
        <div style="background-color: #d8d8f9;">右</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeSplitProps } from 'vxe-pc-ui'

const splitOptions = reactive<VxeSplitProps>({
  items: [
    { slots: { default: 'leftContent' } },
    { slots: { default: 'centerContent' } },
    { slots: { default: 'rightContent' } }
  ]
})
</script>
