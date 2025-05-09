<template>
  <div>
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
        content: '去年',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), -1), 'yyyy-MM-dd')
        }
      },
      {
        name: '3',
        content: '明年',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), 1), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
