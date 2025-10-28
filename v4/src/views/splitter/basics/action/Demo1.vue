<template>
  <div>
    <vxe-button @click="hidePanel">隐藏左侧</vxe-button>
    <vxe-button @click="showPanel">显示左侧</vxe-button>

    <vxe-splitter ref="splitterRef" height="300" :action-config="actionConfig" border>
      <vxe-splitter-panel name="1" width="100">
        <template #default>
          <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel name="2">
        <template #default>
          <div style="height: 600px;background-color: #d8d8f9;">右侧</div>
        </template>
      </vxe-splitter-panel>
    </vxe-splitter>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeSplitterPropTypes, VxeSplitterInstance } from 'vxe-pc-ui'

const splitterRef = ref<VxeSplitterInstance>()

const actionConfig = reactive<VxeSplitterPropTypes.ActionConfig>({
  showPrevButton: true,
  showNextButton: true
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
