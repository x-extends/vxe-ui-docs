<template>
  <div>
    <div>
      <vxe-radio-group v-model="shortcutConfig.position">
        <vxe-radio-button label="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button label="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button label="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button label="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-picker v-model="val1" type="year" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDatePickerPropTypes.ShortcutConfig = {
      position: 'left',
      options: []
    }

    return {
      val1: '',
      shortcutConfig
    }
  },
  created () {
    this.shortcutConfig.options = [
      {
        name: '1',
        content: '今年',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), 0), 'yyyy-MM-dd')
        }
      },
      {
        name: '2',
        content: '上一年',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), -1), 'yyyy-MM-dd')
        }
      },
      {
        name: '3',
        content: '下一年',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), 1), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
