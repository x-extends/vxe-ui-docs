<template>
  <div>
    <vxe-input v-model="val1" placeholder="小圆点" type="date" :festival-method="festivalNoticeMethod" transfer></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeInputPropTypes, VxeInputDefines } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    // 渲染日期小圆点
    const noticeMaps: Record<string, VxeInputDefines.DateFestivalInfo> = {
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

    const festivalNoticeMethod: VxeInputPropTypes.FestivalMethod = (params) => {
      const { date, viewType } = params
      if (viewType === 'date' || viewType === 'day') {
        const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
        return noticeMaps[ymd] || { label: '无' }
      }
    }

    return {
      val1: '2020-10-01',
      noticeMaps,
      festivalNoticeMethod
    }
  }
})
</script>
