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
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  taskViewConfig: {
    scales: [
      { type: 'month', titleFormat: 'yyyy/MM' },
      { type: 'date', titleFormat: 'dd' }
    ]
  },
  columns: [
    { field: 'name', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10002, name: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
    { id: 10004, name: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
    { id: 10006, name: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
    { id: 10007, name: '某某计划', start: '2024-04-15', end: '2024-04-24', progress: 70 },
    { id: 10008, name: '某某科技项目', start: '2024-04-20', end: '2024-04-29', progress: 50 }
  ]
})
</script>
