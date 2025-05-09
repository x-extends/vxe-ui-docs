<template>
  <div>
    <vxe-date-range-picker ref="dateRangePickerRef" :start-value.sync="startDate" :end-value.sync="endDate" type="time">
      <template #right>
        <vxe-button-group vertical>
          <vxe-button mode="text" status="primary" @click="selectLastRangeDate(-1)">最近1小时</vxe-button>
        </vxe-button-group>
      </template>
    </vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerInstance } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    return {
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    selectLastRangeDate (offsetNum: number) {
      const $dateRangePicker = this.$refs.dateRangePickerRef as VxeDateRangePickerInstance
      if ($dateRangePicker) {
        $dateRangePicker.hidePanel()
      }
      this.startDate = XEUtils.toDateString(new Date(Date.now() + (1000 * 60 * 60 * offsetNum)), 'HH:mm:ss')
      this.endDate = XEUtils.toDateString(new Date(), 'HH:mm:ss')
    }
  }
})
</script>
