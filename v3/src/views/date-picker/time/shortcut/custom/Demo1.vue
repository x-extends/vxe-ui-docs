<template>
  <div>
    <vxe-date-picker v-model="val1" type="time" :shortcut-config="shortcutConfig"></vxe-date-picker>
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
        content: '此刻',
        clickMethod: () => {
          this.val1 = XEUtils.toDateString(new Date(), 'HH:mm:ss')
        }
      }
    ]
  }
})
</script>
