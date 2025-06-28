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

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTabsPropTypes, VxeTabsEvents } from 'vxe-pc-ui'

const selectTab = ref<VxeTabsPropTypes.ModelValue>('1')

const tabList = ref<VxeTabsPropTypes.Options>([
  { name: '1', title: '标题1', slots: { default: 'default1' } },
  { name: '2', title: '标题2', slots: { default: 'default2' } },
  { name: '3', title: '标题3', slots: { default: 'default3' } },
  { name: '4', title: '标题4', slots: { default: 'default4' } }
])

const closeConfig = ref<VxeTabsPropTypes.CloseConfig>({
  enabled: true
})

const refreshConfig = ref<VxeTabsPropTypes.RefreshConfig>({
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
})

const tabCloseEvent: VxeTabsEvents.TabClose = ({ name, nextName }) => {
  tabList.value = tabList.value.filter(item => item.name !== name)
  selectTab.value = nextName
}
</script>
