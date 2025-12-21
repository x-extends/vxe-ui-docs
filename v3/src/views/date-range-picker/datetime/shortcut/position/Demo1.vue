<template>
  <div>
    <div>
      <vxe-radio-group v-model="shortcutConfig.position">
        <vxe-radio-button checked-value="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button checked-value="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button checked-value="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button checked-value="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" type="datetime" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDateRangePickerPropTypes.ShortcutConfig = {
      position: 'left',
      options: [
        { code: 'last7', content: '最近7天' },
        { code: 'last30', content: '最近30天' }
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
