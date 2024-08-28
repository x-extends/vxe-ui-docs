<template>
  <div>
    <vxe-calendar v-model="val" :festival-method="festivalNoticeMethod"></vxe-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeCalendarPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val = ref('2020-10-01')

const noticeMaps = ref({
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
})

const festivalNoticeMethod: VxeCalendarPropTypes.FestivalMethod = (params) => {
  const { date, viewType } = params
  if (viewType === 'day') {
    const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
    return noticeMaps.value[ymd] || { label: '无' }
  }
}
</script>
