<template>
  <div>
    <vxe-date-picker v-model="val1" type="week" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDatePickerPropTypes.ShortcutConfig = {
      options: [
        { code: 'now', content: '本周', status: 'primary' },
        { code: 'prev', content: '前一周', status: 'success' },
        { code: 'next', content: '后一周', status: 'error' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
