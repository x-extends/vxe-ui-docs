<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="实现农历及节假日" :festival-method="festivalCalendarMethod"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDatePickerPropTypes, VxeDatePickerDefines } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref('2020-10-01')

// 显示日期农历节假日
const calendarMaps: Record<string, VxeDatePickerDefines.DateFestivalInfo> = {
  20200930: {
    label: '十四' // 显示节日名称
  },
  20201001: {
    label: '国庆节,中秋节', // 如果同一天拥有多个节日重叠，用逗号分开
    important: true, // 是否标记为重要节日
    extra: '休' // 右上角额外显示的名称
  },
  20201002: {
    label: '十六',
    extra: '休'
  },
  20201003: {
    label: '十七',
    extra: '休'
  },
  20201004: {
    label: '十八',
    extra: '休'
  },
  20201005: {
    label: '十九',
    extra: '休'
  },
  20201006: {
    label: '二十',
    extra: '休'
  },
  20201007: {
    label: '廿一',
    extra: '休'
  },
  20201008: {
    label: '寒霜',
    important: true,
    extra: '休'
  },
  20201009: {
    label: '廿三'
  },
  20201010: {
    label: '廿四',
    extra: {
      label: '班',
      important: true // 是否标记为重要节日
    }
  }
}

const festivalCalendarMethod: VxeDatePickerPropTypes.FestivalMethod = (params) => {
  const { date, viewType } = params
  if (viewType === 'day') {
    const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
    return calendarMaps[ymd] || { label: '无' }
  }
}
</script>
