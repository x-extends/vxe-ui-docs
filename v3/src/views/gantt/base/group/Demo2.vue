<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="toggleFixedColumn('seq', 'left')">切换seq列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn('progress', 'right')">切换progress列固定</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttInstance, VxeGanttProps } from 'vxe-gantt'
import { VxeColumnPropTypes } from 'vxe-table'

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
        { type: 'seq', field: 'seq', width: 70, fixed: 'left' },
        { field: 'title', title: '任务名称', minWidth: 300 },
        {
          title: '日期',
          children: [
            { field: 'start', title: '开始时间', width: 100 },
            { field: 'end', title: '结束时间', width: 100 }
          ]
        },
        { field: 'progress', title: '进度(%)', width: 80, fixed: 'right' }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '2024-03-01', end: '2024-03-04', progress: 3 },
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10003, title: 'B大工程', start: '2024-03-03', end: '2024-03-11', progress: 90 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10005, title: '地球净化项目', start: '2024-03-08', end: '2024-03-15', progress: 100 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 },
        { id: 10009, title: '地铁建设工程', start: '2024-03-19', end: '2024-03-20', progress: 5 },
        { id: 10010, title: '铁路修建计划', start: '2024-03-12', end: '2024-03-20', progress: 10 }
      ]
    }

    return {
      ganttOptions
    }
  },
  methods: {
    toggleFixedColumn (field: string, type: VxeColumnPropTypes.Fixed) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        const column = $gantt.getColumnByField(field)
        if (column) {
          $gantt.setColumnFixed(column, column.fixed ? null : type)
        }
      }
    }
  }
})
</script>
