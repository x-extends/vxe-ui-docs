<template>
  <div>
    <vxe-button ref="buttonRef" trigger="manual" :options="downBtns">手动模式</vxe-button>
    <vxe-button @click="openEvent">打开</vxe-button>
    <vxe-button @click="closeEvent">关闭</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeButtonInstance, VxeButtonPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const downBtns: VxeButtonPropTypes.Options = [
      { name: '1', content: '下拉按钮1' },
      { name: '2', content: '下拉按钮2' },
      { name: '3', content: '下拉按钮3' }
    ]

    return {
      downBtns
    }
  },
  methods: {
    openEvent () {
      const $button = this.$refs.buttonRef as VxeButtonInstance
      if ($button) {
        $button.openPanel()
      }
    },
    closeEvent  () {
      const $button = this.$refs.buttonRef as VxeButtonInstance
      if ($button) {
        $button.closePanel()
      }
    }
  }
})
</script>
