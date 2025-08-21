<template>
  <div>
    <vxe-date-picker v-model="selectValue" type="datetime" value-format="yyyy-MM-dd HH:mm" label-format="yyyy-MM-dd HH:mm" @change="loadList()"></vxe-date-picker>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttProps } from 'vxe-gantt'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
  owner: string
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      height: 500,
      loading: false,
      taskBarConfig: {
        showProgress: true,
        showContent: true,
        barStyle: {
          round: true,
          bgColor: '#fca60b',
          completedBgColor: '#65c16f'
        }
      },
      taskViewConfig: {
        scales: ['minute', 'second'],
        tableStyle: {
          width: 320
        }
      },
      columns: [
        { field: 'title', title: '任务名称', width: 120 },
        { field: 'owner', title: '负责人', width: 100 },
        { field: 'start', title: '开始时间', width: 160 },
        { field: 'end', title: '结束时间', width: 160 }
      ],
      data: []
    }

    const selectValue = '2025-01-01 00:00'

    return {
      ganttOptions,
      selectValue
    }
  },
  methods: {
    // 模拟后端接口
    loadList () {
      this.ganttOptions.loading = true
      setTimeout(() => {
        const mockList: RowVO[] = []
        const selectDate = XEUtils.toStringDate(this.selectValue || Date.now())
        for (let i = 0; i < 10; i++) {
          selectDate.setSeconds(XEUtils.random(0, 25))
          const startDate = XEUtils.toDateString(selectDate)
          selectDate.setSeconds(XEUtils.random(26, 59))
          const endDate = XEUtils.toDateString(selectDate)
          mockList.push(
            { id: 10000 + i, title: `任务${i + 1}`, start: startDate, end: endDate, owner: '张三', progress: XEUtils.random(20, 90) }
          )
        }
        this.ganttOptions.loading = false
        this.ganttOptions.data = mockList
      }, 300)
    }
  },
  created () {
    this.loadList()
  }
})
</script>
