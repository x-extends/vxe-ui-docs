<template>
  <div>
    <vxe-gantt v-bind="ganttOptions" :footerData="footerData"></vxe-gantt>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'

import type { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return Math.floor(count / list.length)
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      showFooter: true,
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        {
          field: 'title',
          title: '任务名称',
          minWidth: 140,
          slots: {
            footer ({ row }) {
              return <span style="color: red">平均进度：{ row.progress }%</span>
            }
          }
        },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 },
        { field: 'progress', title: '进度(%)', width: 80 }
      ],
      data: [
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 }
      ]
    }

    return {
      ganttOptions
    }
  },
  computed: {
    footerData () {
      return [
        { seq: '合计', progress: meanNum(this.ganttOptions.data || [], 'progress') }
      ]
    }
  }
})
</script>
