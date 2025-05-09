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
        { code: 'now', content: '本周' },
        { code: 'prev', content: '前一周' },
        { code: 'next', content: '后一周' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
