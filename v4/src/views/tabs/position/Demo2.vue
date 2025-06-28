<template>
  <div>
    <div style="margin-bottom: 16px;">
      <vxe-radio-group v-model="tabPosition">
        <vxe-radio-button label="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button label="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button label="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button label="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-tabs v-model="selectTab" :position="tabPosition" type="card">
      <vxe-tab-pane title="标题1" name="1">
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2">
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3">
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题4" name="4">
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
      </vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTabsPropTypes } from 'vxe-pc-ui'

const selectTab = ref('1')
const tabPosition = ref<VxeTabsPropTypes.Position>('bottom')
</script>
