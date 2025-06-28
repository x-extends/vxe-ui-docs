<template>
  <div>
    <vxe-tabs
      v-model="selectTab"
      type="round-card"
      :height="140"
      :options="tabList"
      :close-config="closeConfig"
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
      </template>

      <template #default3>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
      </template>

      <template #default4>
        <div>内容4</div>
        <div>内容4</div>
        <div>内容4</div>
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
      { name: '3', title: '标题3', slots: { default: 'default3' } },
      { name: '4', title: '标题4', slots: { default: 'default4' } }
    ]

    const closeConfig: VxeTabsPropTypes.CloseConfig = {
      enabled: true
    }

    const refreshConfig: VxeTabsPropTypes.RefreshConfig = {
      enabled: true,
      queryMethod () {
        // 模拟后台接口
        return new Promise<void>(resolve => {
          setTimeout(() => {
            resolve()
          }, 3000)
        })
      },
      visibleMethod ({ name }) {
        if (name === '2') {
          return false
        }
        return true
      }
    }

    return {
      selectTab: '1',
      tabList,
      closeConfig,
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
