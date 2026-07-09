<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

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
      taskConfig: {
        dateFormat: 'yyyy-MM-dd HH:mm:ss'
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
      taskViewConfig: {
        scales: ['date'],
        gridding: {
          leftSpacing: 0,
          rightSpacing: 0
        },
        tableStyle: {
          width: 320
        },
        viewStyle: {
          cellWidth: 800
        }
      },
      columns: [
        { type: 'seq', field: 'seq', width: 70 },
        { field: 'title', title: '任务名称', minWidth: 140 },
        { field: 'start', title: '开始时间', width: 160 },
        { field: 'end', title: '结束时间', width: 160 }
      ],
      data: [
        { id: 10001, title: '任务R790', start: '2024-03-01 08:30:00', end: '2024-03-01 12:30:00', progress: 60 },
        { id: 10002, title: '任务C30456572349', start: '2024-03-01 09:00:00', end: '2024-03-01 14:20:15', progress: 50 },
        { id: 10003, title: '任务E563', start: '2024-03-01 11:20:30', end: '2024-03-01 14:40:50', progress: 90 },
        { id: 10004, title: '任务P687', start: '2024-03-01 12:30:00', end: '2024-03-01 18:30:00', progress: 70 },
        { id: 10005, title: 'C改造项目', start: '2024-03-02 10:20:00', end: '2024-03-02 15:30:20', progress: 40 },
        { id: 10006, title: '铁路修建项目', start: '2024-03-02 14:30:00', end: '2024-03-02 20:10:00', progress: 70 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
