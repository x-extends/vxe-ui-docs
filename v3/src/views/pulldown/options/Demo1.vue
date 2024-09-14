<template>
  <div>
    <vxe-pulldown :options="pullOptions" trigger="click" @option-click="optionClickEvent">
      <template #default>
        <vxe-button mode="text">下拉按钮</vxe-button>
        <vxe-icon name="arrow-down"></vxe-icon>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxePulldownPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const pullOptions: VxePulldownPropTypes.Options = [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' },
      { label: '选项4', value: '4' },
      { label: '选项5', value: '5' },
      { label: '选项6', value: '6' }
    ]

    return {
      pullOptions
    }
  },
  methods: {
    optionClickEvent ({ option }) {
      VxeUI.modal.message({
        content: `点击了${option.value}`,
        status: 'success'
      })
    }
  }
})
</script>
