<template>
  <div>
    <vxe-button status="primary" @click="modeRow(ganttOptions.data[0], ganttOptions.data[2])">Test1 移动到 Test3</vxe-button>
    <vxe-button status="primary" @click="modeRow(ganttOptions.data[1], ganttOptions.data[5])">Test2 移动到 Test6</vxe-button>
    <vxe-button status="success" @click="resultEvent">获取数据</vxe-button>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions">
      <template #action="{ row, rowIndex }">
        <vxe-button mode="text" status="primary" :disabled="rowIndex <= 0" @click="modePrevRow(row)">上移</vxe-button>
        <vxe-button mode="text" status="primary" :disabled="rowIndex >= ganttOptions.data.length - 1" @click="modeNextRow(row)">下移</vxe-button>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts">
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
    const ganttOptions: VxeGanttProps<RowVO> & { data: RowVO[] } = {
      border: true,
      rowConfig: {
        drag: true
      },
      rowDragConfig: {
        showIcon: false
      },
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
        { field: 'title', title: '任务名称', minWidth: 200, dragSort: true },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 },
        { field: 'action', title: '操作', fixed: 'right', width: 120, slots: { default: 'action' } }
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
    modeNextRow (row: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.moveRowTo(row, 1)
      }
    },
    modePrevRow (row: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.moveRowTo(row, -1)
      }
    },
    modeRow (row: RowVO, targetRow: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.moveRowTo(row, targetRow)
      }
    },
    resultEvent () {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        const tableData = $gantt.getFullData()
        console.log(tableData)
      }
    }
  }
})
</script>
