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

    <vxe-tabs v-model="selectTab" :options="tabList" :position="tabPosition">
      <template #prefix>
        <vxe-pulldown :options="tabOptions" trigger="click" show-popup-shadow transfer
          @option-click="tabOptionClickEvent">
          <template #default>
            <vxe-button mode="text" icon="vxe-icon-ellipsis-v"></vxe-button>
          </template>
        </vxe-pulldown>
      </template>

      <template #myTab="{ name }">
        <div>当前 {{ name }}</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </template>
    </vxe-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTabsPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    const selectTab = '1'
    const tabPosition: VxeTabsPropTypes.Position = 'top'

    const tabList: VxeTabsPropTypes.Options = [
      { name: '1', title: '标题1', slots: { default: 'myTab' } },
      { name: '2', title: '标题2', slots: { default: 'myTab' } },
      { name: '3', title: '标题3', slots: { default: 'myTab' } },
      { name: '4', title: '标题4', slots: { default: 'myTab' } },
      { name: '5', title: '标题5', slots: { default: 'myTab' } },
      { name: '6', title: '标题6', slots: { default: 'myTab' } }
    ]

    const tabOptions = [
      { label: '关闭其他页签', value: 'closeOther' },
      { label: '关闭左侧页签', value: 'closeLeft' },
      { label: '关闭右侧页签', value: 'closeRight' },
      { label: '刷新页面', value: 'refresh' }
    ]

    return {
      selectTab,
      tabPosition,
      tabList,
      tabOptions
    }
  },
  methods: {
    tabOptionClickEvent ({ option }) {
      const index = XEUtils.findIndexOf(this.tabList, item => item.name === this.selectTab)
      switch (option.value) {
        case 'closeOther':
          this.tabList = this.tabList.filter(item => item.name === this.selectTab)
          break
        case 'closeLeft':
          this.tabList = this.tabList.slice(index)
          break
        case 'closeRight':
          this.tabList = this.tabList.slice(0, index + 1)
          break
        case 'refresh':
          VxeUI.modal.message({
            content: '刷新页面',
            status: 'success'
          })
          break
      }
    }
  }
})
</script>
