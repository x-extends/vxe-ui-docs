<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  name: string
  startDate: string
  endDate: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
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
        { id: 10001, name: 'A项目', startDate: '2024-03-01', endDate: '2024-03-04', progress: 3 },
        { id: 10002, name: '城市道路修理进度', startDate: '2024-03-03', endDate: '2024-03-08', progress: 10 },
        { id: 10003, name: 'B大工程', startDate: '2024-03-03', endDate: '2024-03-11', progress: 90 },
        { id: 10004, name: '超级大工程', startDate: '2024-03-05 20:30:20', endDate: '2024-03-11 08:10:30', progress: 15 },
        { id: 10005, name: '地球净化项目', startDate: '2024-03-08 10:30:00', endDate: '2024-03-15 09:30:00', progress: 100 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
