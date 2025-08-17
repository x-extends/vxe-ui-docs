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
  startDate: number
  endDate: number
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
        { id: 10001, name: 'A项目', startDate: new Date(2024, 2, 3).getTime(), endDate: new Date(2024, 2, 5).getTime(), progress: 3 },
        { id: 10002, name: '城市道路修理进度', startDate: new Date(2024, 2, 1).getTime(), endDate: new Date(2024, 2, 15).getTime(), progress: 10 },
        { id: 10003, name: 'B大工程', startDate: new Date(2024, 2, 5).getTime(), endDate: new Date(2024, 2, 11).getTime(), progress: 90 },
        { id: 10004, name: '超级大工程', startDate: new Date(2024, 2, 1).getTime(), endDate: new Date(2024, 2, 6).getTime(), progress: 15 },
        { id: 10005, name: '地球净化项目', startDate: new Date(2024, 2, 4).getTime(), endDate: new Date(2024, 2, 6).getTime(), progress: 100 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
