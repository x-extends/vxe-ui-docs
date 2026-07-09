<template>
  <div>
    显示连接线：<vxe-switch v-model="treeConfig.showLine"></vxe-switch>
    显示根节点线：<vxe-switch v-model="treeConfig.showRootLine"></vxe-switch>

    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  title: string
  start: string
  end: string
  progress: number
}

const treeConfig = reactive<VxeTablePropTypes.TreeConfig>({
  transform: true,
  showLine: true,
  showRootLine: true
})

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  showOverflow: true,
  border: 'outer',
  rowConfig: {
    useKey: true
  },
  columnConfig: {
    resizable: true
  },
  treeConfig,
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
    { field: 'title', title: '任务名称', treeNode: true },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 },
    { field: 'progress', title: '进度(%)', width: 80 }
  ],
  data: [
    { id: 10001, parentId: null, title: '任务R790', start: '2024-03-01', end: '2024-03-04', progress: 3 },
    { id: 10002, parentId: 10001, title: '任务C30456572349', start: '2024-03-03', end: '2024-03-08', progress: 10 },
    { id: 10003, parentId: null, title: '任务E563', start: '2024-03-03', end: '2024-03-11', progress: 90 },
    { id: 10004, parentId: 10003, title: '任务P687', start: '2024-03-05', end: '2024-03-11', progress: 15 },
    { id: 10005, parentId: 10003, title: '任务L8412430903', start: '2024-03-08', end: '2024-03-15', progress: 100 },
    { id: 10006, parentId: 10003, title: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 0 },
    { id: 10007, parentId: 10005, title: '任务V513802134450', start: '2024-03-15', end: '2024-03-24', progress: 70 },
    { id: 10008, parentId: null, title: '任务G110', start: '2024-03-20', end: '2024-03-29', progress: 50 },
    { id: 10009, parentId: 10008, title: '任务I802', start: '2024-03-19', end: '2024-03-20', progress: 5 },
    { id: 10010, parentId: 10008, title: '任务W61007467', start: '2024-03-12', end: '2024-03-20', progress: 30 },
    { id: 10011, parentId: 10008, title: '任务T903', start: '2024-03-01', end: '2024-03-04', progress: 20 },
    { id: 10012, parentId: null, title: '任务E425', start: '2024-03-02', end: '2024-03-08', progress: 50 },
    { id: 10013, parentId: 10010, title: '任务M226', start: '2024-03-08', end: '2024-03-11', progress: 10 },
    { id: 10014, parentId: 10010, title: '任务F4180052341', start: '2024-03-12', end: '2024-03-16', progress: 100 },
    { id: 10015, parentId: 10011, title: '任务K778', start: '2024-03-05', end: '2024-03-06', progress: 0 },
    { id: 10016, parentId: 10011, title: '任务D554', start: '2024-03-06', end: '2024-03-11', progress: 10 },
    { id: 10017, parentId: 10011, title: '任务S544', start: '2024-03-08', end: '2024-03-09', progress: 0 },
    { id: 10018, parentId: null, title: '任务B980004523', start: '2024-03-24', end: '2024-03-26', progress: 80 },
    { id: 10019, parentId: 10018, title: '任务X443', start: '2024-03-20', end: '2024-03-28', progress: 10 },
    { id: 10020, parentId: 10018, title: '任务Z8063', start: '2024-03-23', end: '2024-03-28', progress: 60 },
    { id: 10021, parentId: 10018, title: '任务Q2547', start: '2024-03-16', end: '2024-03-25', progress: 10 },
    { id: 10022, parentId: null, title: '任务U9630', start: '2024-03-05', end: '2024-03-24', progress: 0 },
    { id: 10023, parentId: null, title: '任务R427953', start: '2024-03-08', end: '2024-03-28', progress: 5 },
    { id: 10024, parentId: 10023, title: '任务H467983', start: '2024-03-09', end: '2024-03-16', progress: 50 }
  ]
})
</script>
