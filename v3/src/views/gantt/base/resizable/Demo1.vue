<template>
  <div>
    <vxe-switch v-model="ganttOptions.columnConfig.resizable"></vxe-switch>

    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> & {
      columnConfig: VxeTablePropTypes.ColumnConfig<RowVO>
    } = {
      columnConfig: {
        resizable: true
      },
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      taskViewConfig: {
        tableStyle: {
          width: 480
        }
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '2024-03-01', end: '2024-03-04', progress: 3 },
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10003, title: 'B大工程', start: '2024-03-03', end: '2024-03-11', progress: 90 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10005, title: '地球净化项目', start: '2024-03-08', end: '2024-03-15', progress: 100 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
