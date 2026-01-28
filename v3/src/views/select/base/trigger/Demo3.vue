<template>
  <div>
    <vxe-select ref="selectRef" v-model="val1" :popup-config="popupConfig" clearable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2"></vxe-option>
      <vxe-option value="3" label="选项3"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
      <vxe-option value="5" label="选项5"></vxe-option>
      <vxe-option value="6" label="选项6"></vxe-option>
      <vxe-option value="7" label="选项7"></vxe-option>
      <vxe-option value="8" label="选项8"></vxe-option>
    </vxe-select>

    <vxe-button @click="toggleEvent">切换</vxe-button>
    <vxe-button @click="showEvent">打开</vxe-button>
    <vxe-button @click="hideEvent">关闭</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectInstance, VxeSelectPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const popupConfig: VxeSelectPropTypes.PopupConfig = {
      trigger: 'manual'
    }

    return {
      val1: [],
      popupConfig
    }
  },
  methods: {
    toggleEvent () {
      const $select = this.$refs.selectRef as VxeSelectInstance
      if ($select) {
        $select.togglePanel()
      }
    },
    showEvent () {
      const $select = this.$refs.selectRef as VxeSelectInstance
      if ($select) {
        $select.showPanel()
      }
    },
    hideEvent () {
      const $select = this.$refs.selectRef as VxeSelectInstance
      if ($select) {
        $select.hidePanel()
      }
    }
  }
})
</script>
