<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
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
  taskViewConfig: {
    scales: [
      { type: 'date' },
      { type: 'hour', step: 3 }
    ],
    tableStyle: {
      width: 320
    }
  },
  columns: [
    { type: 'seq', field: 'seq', width: 70 },
    { field: 'title', title: '任务名称', minWidth: 140 },
    { field: 'start', title: '开始时间', width: 160 },
    { field: 'end', title: '结束时间', width: 160 }
  ],
  data: [
    { id: 10001, title: '任务R790', start: '2024-03-01 08:30:20', end: '2024-03-01 09:30:30', progress: 100 },
    { id: 10002, title: '任务C309', start: '2024-03-01 00:00:00', end: '2024-03-01 00:00:00', progress: 100 },
    { id: 10003, title: '任务E563', start: '2024-03-01 01:00:00', end: '2024-03-01 01:05:0', progress: 90 },
    { id: 10004, title: '任务P687', start: '2024-03-01 01:20:00', end: '2024-03-01 08:50:00', progress: 80 }
  ]
})
</script>
