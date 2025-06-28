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

    <vxe-tabs v-model="selectTab" :position="tabPosition">
      <template #header>
        <div>
          <vxe-notice-bar content="vxe-table 企业级表格组件库、vxe-pc-ui 企业级桌面端组件库。无论是低代码平台还是常用后台管理系统，都能快速搭建。"></vxe-notice-bar>
        </div>
      </template>

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

<script lang="ts">
import Vue from 'vue'
import { VxeTabsPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const selectTab = '1'
    const tabPosition: VxeTabsPropTypes.Position = 'left'

    return {
      selectTab,
      tabPosition
    }
  }
})
</script>
