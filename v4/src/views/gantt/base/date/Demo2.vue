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
  taskConfig: {
    dateFormat: 'yyyy-MM-dd HH:mm:ss'
  },
  columns: [
    { field: 'title', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, title: '任务R790', start: '2024-01-01 00:00:00', end: '2024-01-01 00:00:00', progress: 3 },
    { id: 10002, title: '任务C30456572349', start: '2024-01-03 01:12:00', end: '2024-01-03 08:30:40', progress: 10 },
    { id: 10003, title: '任务E563', start: '2024-01-04 12:30:00', end: '2024-01-06 18:00:20', progress: 90 },
    { id: 10004, title: '任务P687', start: '2024-01-02 05:00:00', end: '2024-01-03 20:00:00', progress: 15 },
    { id: 10005, title: '任务L8412430903', start: '2024-01-02 06:00:00', end: '2024-01-05 12:00:00', progress: 100 }
  ]
})
</script>
