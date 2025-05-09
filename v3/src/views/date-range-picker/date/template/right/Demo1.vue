<template>
  <div>
    <vxe-date-range-picker ref="dateRangePickerRef" :start-value.sync="startDate" :end-value.sync="endDate">
      <template #right>
        <vxe-button-group vertical>
          <vxe-button mode="text" status="primary" @click="selectLastRangeDate(-7)">最近7天</vxe-button>
          <vxe-button mode="text" @click="selectLastRangeDate(-30)">最近30天</vxe-button>
          <vxe-button mode="text" @click="selectLastRangeDate(-90)">最近90天</vxe-button>
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
      this.startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), offsetNum), 'yyyy-MM-dd')
      this.endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    }
  }
})
</script>
