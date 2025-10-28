<template>
  <div>
    <vxe-button @click="hidePanel">隐藏左侧</vxe-button>
    <vxe-button @click="showPanel">显示左侧</vxe-button>

    <vxe-split ref="splitterRef" v-bind="splitOptions">
      <template #leftContent>
        <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <div style="height: 600px;background-color: #d8d8f9;">右侧</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeSplitterProps, VxeSplitterInstance } from 'vxe-pc-ui'

const splitterRef = ref<VxeSplitterInstance>()

const splitOptions = reactive<VxeSplitterProps>({
  height: 300,
  border: true,
  actionConfig: {
    showPrevButton: true,
    showNextButton: true
  },
  items: [
    { name: '1', width: 100, slots: { default: 'leftContent' } },
    { name: '2', slots: { default: 'rightContent' } }
  ]
})

const showPanel = () => {
  const $splitterRef = splitterRef.value
  if ($splitterRef) {
    $splitterRef.setItemExpand('1', true)
  }
}

const hidePanel = () => {
  const $splitterRef = splitterRef.value
  if ($splitterRef) {
    $splitterRef.setItemExpand('1', false)
  }
}
</script>
