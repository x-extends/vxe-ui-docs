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
  name: string
  startDate: Date
  endDate: Date
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  taskConfig: {
    startField: 'startDate',
    endField: 'endDate',
    progressField: 'progress'
  },
  columns: [
    { field: 'name', title: '任务名称' },
    { field: 'startDate', title: '开始时间', width: 100 },
    { field: 'endDate', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, name: 'A项目', startDate: new Date(2024, 2, 3), endDate: new Date(2024, 2, 5), progress: 3 },
    { id: 10002, name: '城市道路修理进度', startDate: new Date(2024, 2, 1), endDate: new Date(2024, 2, 15), progress: 10 },
    { id: 10003, name: 'B大工程', startDate: new Date(2024, 2, 5), endDate: new Date(2024, 2, 11), progress: 90 },
    { id: 10004, name: '超级大工程', startDate: new Date(2024, 2, 1), endDate: new Date(2024, 2, 6), progress: 15 },
    { id: 10005, name: '地球净化项目', startDate: new Date(2024, 2, 4), endDate: new Date(2024, 2, 6), progress: 100 }
  ]
})
</script>
