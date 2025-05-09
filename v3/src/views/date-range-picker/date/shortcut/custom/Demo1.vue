<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
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
        content: '最近7天',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -7), 'yyyy-MM-dd')
          this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      },
      {
        name: '2',
        content: '最近30天',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -30), 'yyyy-MM-dd')
          this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      },
      {
        name: '3',
        content: '最近90天',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -90), 'yyyy-MM-dd')
          this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
