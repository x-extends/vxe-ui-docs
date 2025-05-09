<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="quarter" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDateRangePickerPropTypes.ShortcutConfig = {
      options: []
    }

    return {
      startDate: '',
      endDate: '',
      shortcutConfig
    }
  },
  created () {
    this.shortcutConfig.options = [
      {
        name: '1',
        content: '最近1个季度',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), -1), 'yyyy-MM-dd')
          this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      },
      {
        name: '2',
        content: '最近2个季度',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), -2), 'yyyy-MM-dd')
          this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
