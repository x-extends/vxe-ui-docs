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

    <vxe-tabs v-model="selectTab" height="200" width="400" type="border-card" :position="tabPosition" padding>
      <vxe-tab-pane title="标题1" name="1">
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
        <template #default>
          <div>内容4</div>
          <div>内容4</div>
          <div>内容4</div>
          <div>内容4</div>
          <div>内容4</div>
          <div>内容4</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题5" name="5">
        <template #default>
          <div>内容5</div>
          <div>内容5</div>
          <div>内容5</div>
          <div>内容5</div>
          <div>内容5</div>
          <div>内容5</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题6" name="6">
        <template #default>
          <div>内容6</div>
          <div>内容6</div>
          <div>内容6</div>
          <div>内容6</div>
          <div>内容6</div>
          <div>内容6</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题7" name="7">
        <template #default>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题8" name="8">
        <template #default>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题9" name="9">
        <template #default>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
          <div>内容7</div>
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
    const tabPosition: VxeTabsPropTypes.Position = 'left'

    return {
      selectTab,
      tabPosition
    }
  }
})
</script>
