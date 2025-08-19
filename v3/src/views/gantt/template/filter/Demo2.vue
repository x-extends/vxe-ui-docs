<template>
  <div>
    <vxe-gantt ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGanttProps, VxeGanttInstance } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {}

    return {
      ganttOptions
    }
  },
  created () {
    this.ganttOptions = {
      border: true,
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      columns: [
        { type: 'checkbox', width: 60 },
        {
          field: 'title',
          title: '任务名称',
          minWidth: 140,
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, cellValue }) {
            return `${cellValue}`.indexOf(option.data) > -1
          },
          slots: {
            filter: ({ column }) => {
              return column.filters.map((option, index) => {
                return <vxe-input
                  v-model={option.data}
                  key={index}
                  onChange={
                    () => {
                      this.changeFilterEvent(option)
                    }
                  }>
                  </vxe-input>
              })
            }
          }
        },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, title: '', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 }
      ]
    }
  },
  methods: {
    changeFilterEvent (option: any) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.updateFilterOptionStatus(option, !!option.data)
      }
    }
  }
})
</script>
