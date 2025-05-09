<template>
  <div>
    <vxe-date-picker v-model="val1" type="quarter" :shortcut-config="shortcutConfig"></vxe-date-picker>
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
        content: '本季度',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), 0), 'yyyy-MM-dd')
        }
      },
      {
        name: '2',
        content: '上季度',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), -1), 'yyyy-MM-dd')
        }
      },
      {
        name: '3',
        content: '下季度',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), 1), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
