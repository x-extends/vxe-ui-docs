<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="year" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDateRangePickerPropTypes.ShortcutConfig = {
      options: [
        { code: 'last1', content: '最近1年' },
        { code: 'last3', content: '最近3年' }
      ]
    }

    return {
      startDate: '',
      endDate: '',
      shortcutConfig
    }
  }
})
</script>
