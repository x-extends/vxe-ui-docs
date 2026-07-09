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
      columnConfig: {
        resizable: true
      },
      toolbarConfig: {
        custom: true
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
        { id: 10001, title: '任务R790', start: '2024-03-01', end: '2024-03-04', progress: 3 },
        { id: 10002, title: '任务C309', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10003, title: '任务E563', start: '2024-03-03', end: '2024-03-11', progress: 90 },
        { id: 10004, title: '任务P687', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10005, title: '任务L843', start: '2024-03-08', end: '2024-03-15', progress: 100 },
        { id: 10006, title: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '任务V510', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '任务G110', start: '2024-03-20', end: '2024-03-29', progress: 50 },
        { id: 10009, title: '任务I802', start: '2024-03-19', end: '2024-03-20', progress: 5 },
        { id: 10010, title: '任务K778', start: '2024-03-12', end: '2024-03-20', progress: 10 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
