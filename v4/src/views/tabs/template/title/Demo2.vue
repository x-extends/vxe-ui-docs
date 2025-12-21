<template>
  <div>
    <div style="margin-bottom: 16px;">
      <vxe-radio-group v-model="tabPosition">
        <vxe-radio-button checked-value="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button checked-value="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button checked-value="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button checked-value="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-tabs v-model="selectTab" :position="tabPosition" type="card">
      <vxe-tab-pane title="标题1" name="1">
        <template #title="{ title }">
          <span style="color: red">{{ title }}</span>
        </template>

        <template #default>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2">
        <template #title="{ title }">
          <span style="color: blue">{{ title }}</span>
        </template>

        <template #default>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3">
        <template #title="{ title }">
          <span style="color: orange">{{ title }}</span>
        </template>

        <template #default>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题4" name="4">
        <template #title="{ title }">
          <span style="color: green">{{ title }}</span>
        </template>

        <template #default>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
        </template>
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
