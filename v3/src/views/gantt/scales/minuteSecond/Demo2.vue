<template>
  <div>
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
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      showOverflow: true,
      cellConfig: {
        height: 80
      },
      taskBarConfig: {
        showProgress: true,
        showContent: true,
        barStyle: {
          round: true,
          bgColor: '#f56565',
          completedBgColor: '#65c16f'
        }
      },
      taskConfig: {
        dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS'
      },
      taskViewConfig: {
        scales: ['minute', 'second'],
        tableStyle: {
          width: 320
        },
        viewStyle: {
          cellWidth: 120
        }
      },
      columns: [
        { type: 'seq', field: 'seq', width: 70 },
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 160 },
        { field: 'end', title: '结束时间', width: 160 }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '2024-03-01 08:02:10.100', end: '2024-03-01 08:02:10.200', progress: 100 },
        { id: 10002, title: '城市道路修理进度', start: '2024-03-01 08:02:11.000', end: '2024-03-01 08:02:11.000', progress: 100 },
        { id: 10003, title: 'B大工程', start: '2024-03-01 08:02:11.400', end: '2024-03-01 08:02:12.300', progress: 90 },
        { id: 10004, title: '超级大工程', start: '2024-03-01 08:02:12.200', end: '2024-03-01 08:02:14.888', progress: 80 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
