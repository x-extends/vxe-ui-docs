<template>
  <div>
    <vxe-tabs
      padding
      v-model="selectTab"
      type="round-card"
      :height="140"
      :options="tabList"
      :refresh-config="refreshConfig"
      @tabClose="tabCloseEvent">
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
import { VxeTabsPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const tabList: VxeTabsPropTypes.Options = [
      { name: '1', title: '标题1', slots: { default: 'default1' } },
      { name: '2', title: '标题2', slots: { default: 'default2' } },
      { name: '3', title: '标题3', slots: { default: 'default3' } }
    ]

    const refreshConfig: VxeTabsPropTypes.RefreshConfig = {
      enabled: true,
      queryMethod () {
        // 模拟后台接口
        return new Promise<void>(resolve => {
          setTimeout(() => {
            resolve()
          }, 500)
        })
      }
    }

    return {
      selectTab: '1',
      tabList,
      refreshConfig
    }
  },
  methods: {
    tabCloseEvent ({ name, nextName }) {
      this.tabList = this.tabList.filter(item => item.name !== name)
      this.selectTab = nextName
    }
  }
})
</script>
