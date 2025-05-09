<template>
  <div>
    <vxe-date-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-picker>
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
        content: '今天',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      },
      {
        name: '2',
        content: '昨天',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -1), 'yyyy-MM-dd')
        }
      },
      {
        name: '3',
        content: '明天',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), 1), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
