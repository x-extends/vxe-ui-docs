<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  name: string
  start: string
  end: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      taskViewConfig: {
        viewStyle: {
          cellWidth: 50
        },
        scales: [
          {
            type: 'month',
            slots: {
              title: ({ dateObj }) => {
                return <span>
                  <vxe-icon name="flag-fill" status="error"></vxe-icon>
                  <span style="color: red;">{`自定义内容：第${dateObj.M}月份`}</span>
                </span>
              }
            }
          },
          {
            type: 'date',
            slots: {
              title: ({ dateObj }) => {
                return <span>
                  <vxe-icon name="calendar" status="primary"></vxe-icon>
                  <span style="color: blue;">{dateObj.d}</span>
                </span>
              }
            }
          }
        ]
      },
      columns: [
        { field: 'name', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10002, name: '任务C30456572349', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, name: '任务P687', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, name: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, name: '任务V513802134450', start: '2024-04-15', end: '2024-04-24', progress: 70 },
        { id: 10008, name: '任务G110', start: '2024-04-20', end: '2024-04-29', progress: 50 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
