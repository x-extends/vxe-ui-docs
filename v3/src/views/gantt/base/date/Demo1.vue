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
  title: string
  start: string
  end: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      taskConfig: {
        dateFormat: 'dd/MM/yyyy'
      },
      columns: [
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '03/03/2024', end: '04/03/2024', progress: 3 },
        { id: 10002, title: '城市道路修理进度', start: '04/03/2024', end: '08/03/2024', progress: 10 },
        { id: 10003, title: 'B大工程', start: '08/03/2024', end: '12/03/2024', progress: 90 },
        { id: 10004, title: '超级大工程', start: '14/03/2024', end: '19/03/2024', progress: 15 },
        { id: 10005, title: '地球净化项目', start: '10/03/2024', end: '17/03/2024', progress: 100 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
