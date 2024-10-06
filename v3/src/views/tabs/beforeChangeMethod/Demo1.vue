<template>
  <div>
    <vxe-tabs
      v-model="selectTab"
      type="round-card"
      :height="140"
      :options="tabList"
      :before-change-method="beforeChangeMethod"
      @tab-change="tabChangeEvent"
      @tab-change-fail="tabChangeFailEvent">
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

    const beforeChangeMethod: VxeTabsPropTypes.BeforeChangeMethod = () => {
      // 支持同步或异步
      return VxeUI.modal.confirm({
        content: '请确认是否允许切换？'
      }).then(type => {
        if (type === 'confirm') {
          return true
        }
        return false
      })
    }

    return {
      selectTab: '1',
      tabList,
      beforeChangeMethod
    }
  },
  methods: {
    tabChangeEvent ({ name }) {
      VxeUI.modal.message({
        content: `已切换到新页签 name=${name}`,
        status: 'success'
      })
    },
    tabChangeFailEvent () {
      VxeUI.modal.message({
        content: '阻止切换',
        status: 'warning'
      })
    }
  }
})
</script>
