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
        <template #title-prefix>
          <span>🔥</span>
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
        <template #title-prefix>
          <span>🔥</span>
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
        <template #title-prefix>
          <span>🔥</span>
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
        <template #title-prefix>
          <span>🔥</span>
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

<script lang="ts">
import Vue from 'vue'
import { VxeTabsPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const selectTab = '1'
    const tabPosition: VxeTabsPropTypes.Position = 'bottom'

    return {
      selectTab,
      tabPosition
    }
  }
})
</script>
