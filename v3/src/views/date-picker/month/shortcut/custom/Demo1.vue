<template>
  <div>
    <vxe-date-picker v-model="val1" type="month" :shortcut-config="shortcutConfig"></vxe-date-picker>
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
        content: '本月',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
      },
      {
        name: '2',
        content: '上月',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatMonth(new Date(), -1), 'yyyy-MM-dd')
        }
      },
      {
        name: '3',
        content: '下月',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(XEUtils.getWhatMonth(new Date(), 1), 'yyyy-MM-dd')
        }
      }
    ]
  }
})
</script>
