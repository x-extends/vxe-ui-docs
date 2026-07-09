<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  showOverflow: true,
  cellConfig: {
    height: 80
  },
  taskConfig: {
    dateFormat: 'yyyy-MM-dd'
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
    scales: ['year', 'quarter'],
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
    { id: 10001, title: '任务R790', start: '2024-02-26', end: '2024-05-03', progress: 90 },
    { id: 10002, title: '任务C30456572349', start: '2024-03-03', end: '2024-08-18', progress: 70 },
    { id: 10003, title: '任务E563', start: '2024-05-28', end: '2024-10-11', progress: 90 },
    { id: 10004, title: '任务P687', start: '2024-08-11', end: '2024-11-18', progress: 80 }
  ]
})
</script>
