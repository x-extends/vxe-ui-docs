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
        { id: 10001, name: '任务R790', startDate: '2024-03-01', endDate: '2024-03-04', progress: 3 },
        { id: 10002, name: '任务C309', startDate: '2024-03-03', endDate: '2024-03-08', progress: 10 },
        { id: 10003, name: '任务E563', startDate: '2024-03-03', endDate: '2024-03-11', progress: 90 },
        { id: 10004, name: '任务P687', startDate: '2024-03-05', endDate: '2024-03-11', progress: 15 },
        { id: 10005, name: '任务L843', startDate: '2024-03-08', endDate: '2024-03-15', progress: 100 },
        { id: 10006, name: '任务B567', startDate: '2024-03-10', endDate: '2024-03-21', progress: 5 },
        { id: 10007, name: '任务V510', startDate: '2024-03-15', endDate: '2024-03-24', progress: 70 },
        { id: 10008, name: '任务G110', startDate: '2024-03-20', endDate: '2024-03-29', progress: 50 },
        { id: 10009, name: '任务I802', startDate: '2024-03-19', endDate: '2024-03-20', progress: 5 },
        { id: 10010, name: '任务K778', startDate: '2024-03-12', endDate: '2024-03-20', progress: 10 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
