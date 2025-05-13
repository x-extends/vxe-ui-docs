<template>
  <div>
    <vxe-tabs ref="tabsRef" v-model="selectTab" :height="140" :options="tabList" trigger="manual">
      <template #default1>
        <div>内容1</div>
        <div>内容1</div>
      </template>

      <template #default2>
        <div>内容2</div>
        <div>内容2</div>
      </template>

      <template #default3>
        <div>内容3</div>
        <div>内容3</div>
      </template>

      <template #default4>
        <div>内容4</div>
        <div>内容4</div>
      </template>
    </vxe-tabs>

    <div>
      <vxe-button status="primary" :disabled="selectTab === '1'" @click="prevEvent">上一步</vxe-button>
      <vxe-button status="primary" :disabled="selectTab === '4'" @click="nextEvent">下一步</vxe-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTabsPropTypes, VxeTabsInstance } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const tabList: VxeTabsPropTypes.Options = [
      { name: '1', title: '标题1', slots: { default: 'default1' } },
      { name: '2', title: '标题2', slots: { default: 'default2' } },
      { name: '3', title: '标题3', slots: { default: 'default3' } },
      { name: '4', title: '标题4', slots: { default: 'default4' } }
    ]

    return {
      selectTab: '1',
      tabList
    }
  },
  methods: {
    prevEvent () {
      const $tabs = this.$refs.tabsRef as VxeTabsInstance
      if ($tabs) {
        $tabs.prev()
      }
    },
    nextEvent  () {
      const $tabs = this.$refs.tabsRef as VxeTabsInstance
      if ($tabs) {
        $tabs.next()
      }
    }
  }
})
</script>
