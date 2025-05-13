<template>
  <div>
    <vxe-button :options="downBtns" @dropdown-click="dropdownClickEvent">下拉按钮</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeButtonPropTypes } from 'vxe-pc-ui'

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
    dropdownClickEvent (params) {
      VxeUI.modal.message({
        content: `点击了 ${params.name}`
      })
    }
  }
})
</script>
