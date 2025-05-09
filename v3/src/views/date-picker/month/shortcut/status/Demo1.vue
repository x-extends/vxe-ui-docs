<template>
  <div>
    <vxe-date-picker v-model="val1" type="month" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDatePickerPropTypes.ShortcutConfig = {
      options: [
        { code: 'now', content: '本月', status: 'primary' },
        { code: 'prev', content: '前一月', status: 'success' },
        { code: 'next', content: '后一月', status: 'error' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
