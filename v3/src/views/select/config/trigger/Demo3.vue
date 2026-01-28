<template>
  <div>
    <vxe-select ref="selectRef" v-model="val1" v-bind="selectOptions"></vxe-select>

    <vxe-button @click="toggleEvent">切换</vxe-button>
    <vxe-button @click="showEvent">打开</vxe-button>
    <vxe-button @click="hideEvent">关闭</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectInstance, VxeSelectProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const selectOptions: VxeSelectProps = {
      clearable: true,
      popupConfig: {
        trigger: 'manual'
      },
      options: [
        { value: 1001, label: 'table' },
        { value: 1002, label: 'grid' },
        { value: 1003, label: 'button' },
        { value: 1004, label: 'toolbar' },
        { value: 1005, label: 'tooltip' },
        { value: 1006, label: 'pager' },
        { value: 1007, label: 'print' },
        { value: 1008, label: 'export' },
        { value: 1009, label: 'import' },
        { value: 1010, label: 'select' },
        { value: 1012, label: 'checkbox' },
        { value: 1013, label: 'group' }
      ]
    }

    return {
      val1: [],
      selectOptions
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
