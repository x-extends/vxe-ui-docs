<template>
  <div>
    <vxe-button trigger="click" :options="downBtns">点击触发</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeButtonPropTypes } from 'vxe-pc-ui'

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
  }
})
</script>
