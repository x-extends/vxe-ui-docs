<template>
  <div>
    <vxe-tabs
      padding
      v-model="selectTab"
      type="round-card"
      :height="140"
      :options="tabList"
      :close-config="closeConfig"
      @tab-close="tabCloseEvent"
      @tab-close-fail="tabCloseFailEvent">
      <template #default1>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </template>

      <template #default2>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
      </template>

      <template #default3>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
      </template>
    </vxe-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTabsPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const tabList: VxeTabsPropTypes.Options = [
      { name: '1', title: '标题1', slots: { default: 'default1' } },
      { name: '2', title: '标题2', slots: { default: 'default2' } },
      { name: '3', title: '标题3', slots: { default: 'default3' } }
    ]

    const closeConfig: VxeTabsPropTypes.CloseConfig = {
      enabled: true,
      beforeMethod () {
        // 支持同步或异步
        return VxeUI.modal.confirm({
          content: '请确认是否关闭？'
        }).then(type => {
          if (type === 'confirm') {
            return true
          }
          return false
        })
      }
    }

    return {
      selectTab: '1',
      tabList,
      closeConfig
    }
  },
  methods: {
    tabCloseEvent ({ name, nextName }) {
      VxeUI.modal.message({
        content: '已关闭',
        status: 'success'
      })
      this.tabList = this.tabList.filter(item => item.name !== name)
      this.selectTab = nextName
    },
    tabCloseFailEvent () {
      VxeUI.modal.message({
        content: '阻止关闭',
        status: 'warning'
      })
    }
  }
})
</script>
