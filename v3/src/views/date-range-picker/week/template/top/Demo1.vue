<template>
  <div>
    <vxe-date-range-picker ref="dateRangePickerRef" :start-value.sync="startDate" :end-value.sync="endDate" type="week">
      <template #top>
        <vxe-button mode="text" status="primary" @click="selectLastRangeDate(-7)">最近1周</vxe-button>
        <vxe-button mode="text" @click="selectLastRangeDate(-14)">最近2周</vxe-button>
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
      this.startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), offsetNum), 'yyyy-MM-dd')
      this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    }
  }
})
</script>
