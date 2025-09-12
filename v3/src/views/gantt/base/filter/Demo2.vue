<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

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
      border: true,
      height: 400,
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
        { field: 'id', title: 'ID', width: 80 },
        { field: 'title', title: '任务名称', minWidth: 200 },
        {
          title: '分组1',
          children: [
            {
              field: 'start',
              title: '开始时间',
              width: 100,
              filterMultiple: false,
              filters: [
                { label: '2024-03-03', value: '2024-03-03' },
                { label: '2024-03-05', value: '2024-03-05' },
                { label: '2024-03-08', value: '2024-03-08' }
              ]
            },
            { field: 'end', title: '结束时间', width: 100 }
          ]
        },
        {
          field: 'progress',
          title: '进度(%)',
          width: 120,
          filters: [
            { label: '3', value: 3 },
            { label: '10', value: 10 },
            { label: '15', value: 15 },
            { label: '90', value: 90 },
            { label: '100', value: 100 }
          ]
        }
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
