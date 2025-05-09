<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="time" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
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
        content: '最近1小时',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(new Date(Date.now() - 1000 * 60 * 60), 'HH:mm:ss')
          this.endDate = XEUtils.toDateString(new Date(), 'HH:mm:ss')
        }
      },
      {
        name: '2',
        content: '最近3小时',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(new Date(Date.now() - 1000 * 60 * 60 * 3), 'HH:mm:ss')
          this.endDate = XEUtils.toDateString(new Date(), 'HH:mm:ss')
        }
      },
      {
        name: '3',
        content: '最近6小时',
        clickMethod: () => {
          this.startDate = XEUtils.toDateString(new Date(Date.now() - 1000 * 60 * 60 * 6), 'HH:mm:ss')
          this.endDate = XEUtils.toDateString(new Date(), 'HH:mm:ss')
        }
      }
    ]
  }
})
</script>
