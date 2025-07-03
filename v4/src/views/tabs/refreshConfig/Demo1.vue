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

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTabsPropTypes, VxeTabsEvents } from 'vxe-pc-ui'

const selectTab = ref<VxeTabsPropTypes.ModelValue>('1')

const tabList = ref<VxeTabsPropTypes.Options>([
  { name: '1', title: '标题1', slots: { default: 'default1' } },
  { name: '2', title: '标题2', slots: { default: 'default2' } },
  { name: '3', title: '标题3', slots: { default: 'default3' } }
])

const refreshConfig = ref<VxeTabsPropTypes.RefreshConfig>({
  enabled: true,
  queryMethod () {
    // 模拟后台接口
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }
})

const tabCloseEvent: VxeTabsEvents.TabClose = ({ name, nextName }) => {
  tabList.value = tabList.value.filter(item => item.name !== name)
  selectTab.value = nextName
}
</script>
