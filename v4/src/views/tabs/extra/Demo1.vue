<template>
  <div>
    <vxe-tabs v-model="selectTab" :options="tabList">
      <template #extra>
        <vxe-pulldown :options="tabOptions" trigger="click" show-popup-shadow transfer
          @option-click="tabOptionClickEvent">
          <template #default>
            <vxe-button mode="text" icon="vxe-icon-ellipsis-v"></vxe-button>
          </template>
        </vxe-pulldown>
      </template>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import XEUtils from 'xe-utils'
import { ref } from 'vue'
import { VxeUI, VxeTabsPropTypes } from 'vxe-pc-ui'

const selectTab = ref('1')

const tabList = ref<VxeTabsPropTypes.Options>([
  { name: '1', title: '标题1标题1标题1' },
  { name: '2', title: '标题2' },
  { name: '3', title: '标题3标题3标题3' },
  { name: '4', title: '标题4标题4' },
  { name: '5', title: '标题5标题5标题5' },
  { name: '6', title: '标题6标题6标题6标题6标题6标题6' },
  { name: '7', title: '标题7标题7标题7' },
  { name: '8', title: '标题8标题8' },
  { name: '9', title: '标题9标题9标题9' },
  { name: '10', title: '标题10标题10标题10标题10' },
  { name: '11', title: '标题11标题11标题11' },
  { name: '12', title: '标题12标' },
  { name: '13', title: '标题13标题13标题13' },
  { name: '14', title: '标题14标题14' },
  { name: '15', title: '标题15标题15标题15' },
  { name: '16', title: '标题16标题16标题16标题16' }
])

const tabOptions = ref([
  { label: '关闭其他页签', value: 'closeOther' },
  { label: '关闭左侧页签', value: 'closeLeft' },
  { label: '关闭右侧页签', value: 'closeRight' },
  { label: '刷新页面', value: 'refresh' }
])

const tabOptionClickEvent = ({ option }) => {
  const index = XEUtils.findIndexOf(tabList.value, item => item.name === selectTab.value)
  switch (option.value) {
    case 'closeOther':
      tabList.value = tabList.value.filter(item => item.name === selectTab.value)
      break
    case 'closeLeft':
      tabList.value = tabList.value.slice(index)
      break
    case 'closeRight':
      tabList.value = tabList.value.slice(0, index + 1)
      break
    case 'refresh':
      VxeUI.modal.message({
        content: '刷新页面',
        status: 'success'
      })
      break
  }
}
</script>
