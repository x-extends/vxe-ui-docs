<template>
  <div>
    <vxe-button @click="setMerge1">设置合并1</vxe-button>
    <vxe-button @click="setMerge2">设置合并2</vxe-button>
    <vxe-button status="success" @click="saveMergeData">获取合并规则</vxe-button>

    <vxe-gantt  ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGanttInstance, VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const ganttRef = ref<VxeGanttInstance<RowVO>>()

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  showCustomHeader: true,
  height: 400,
  mergeHeaderCells: [
    { row: 0, col: 0, rowspan: 2, colspan: 1 },
    { row: 0, col: 1, rowspan: 2, colspan: 1 },
    { row: 1, col: 2, rowspan: 1, colspan: 2 },
    { row: 0, col: 4, rowspan: 2, colspan: 1 }
  ],
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
    {
      title: '开始时间',
      children: [
        { field: 'start', title: '日期', width: 100, headerAlign: 'center' }
      ]
    },
    {
      title: '结束时间',
      children: [
        { field: 'end', title: '', width: 100 }
      ]
    },
    { field: 'progress', title: '进度(%)', width: 100 }
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
})

const setMerge1 = () => {
  ganttOptions.mergeHeaderCells = [
    { row: 0, col: 0, rowspan: 2, colspan: 1 },
    { row: 0, col: 1, rowspan: 2, colspan: 1 },
    { row: 1, col: 2, rowspan: 1, colspan: 2 },
    { row: 0, col: 4, rowspan: 2, colspan: 1 }
  ]
}

const setMerge2 = () => {
  ganttOptions.mergeHeaderCells = [
    { row: 0, col: 0, rowspan: 2, colspan: 2 },
    { row: 1, col: 2, rowspan: 1, colspan: 2 },
    { row: 0, col: 4, rowspan: 2, colspan: 1 }
  ]
}

const saveMergeData = () => {
  const $gantt = ganttRef.value
  if ($gantt) {
    const mergeList = $gantt.getMergeHeaderCells()
    console.log(mergeList)
  }
}
</script>
