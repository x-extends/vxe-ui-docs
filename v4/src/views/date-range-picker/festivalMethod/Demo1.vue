<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" placeholder="小圆点" :festival-method="festivalNoticeMethod"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDateRangePickerPropTypes, VxeDateRangePickerDefines } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const startDate = ref('2020-10-01')
const endDate = ref('2020-10-07')

// 渲染日期小圆点
const noticeMaps: Record<string, VxeDateRangePickerDefines.DateFestivalInfo> = {
  20200910: {
    notice: true, // 显示小圆点事件通知
    important: true, // 是否标记为重要节日
    label: '活动'
  },
  20201015: {
    notice: true,
    important: true,
    label: '聚餐'
  },
  20201108: {
    notice: true,
    label: '爬山'
  },
  20201222: {
    notice: true,
    label: '游泳'
  }
}

const festivalNoticeMethod: VxeDateRangePickerPropTypes.FestivalMethod = (params) => {
  const { date, viewType } = params
  if (viewType === 'date' || viewType === 'day') {
    const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
    return noticeMaps[ymd] || { label: '无' }
  }
}
</script>
