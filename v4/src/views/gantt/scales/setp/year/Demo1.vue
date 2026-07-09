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
      { type: 'year', step: 3 }
    ],
    tableStyle: {
      width: 320
    }
  },
  columns: [
    { type: 'seq', field: 'seq', width: 70 },
    { field: 'title', title: '任务名称', minWidth: 140 },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, title: 'A项目', start: '2021-02-26', end: '2028-05-03', progress: 90 },
    { id: 10002, title: '城市道路修理进度', start: '2026-03-03', end: '2031-08-18', progress: 70 },
    { id: 10003, title: 'B大工程', start: '2029-05-28', end: '2038-10-11', progress: 90 },
    { id: 10004, title: '超级大工程', start: '2038-08-11', end: '2046-11-18', progress: 80 }
  ]
})
</script>
