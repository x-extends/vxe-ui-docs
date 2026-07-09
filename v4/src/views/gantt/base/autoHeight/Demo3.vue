<template>
  <div>
    <p>
      <vxe-button @click="tableWidth = '600px'">宽600px</vxe-button>
      <vxe-button @click="tableWidth = '700px'">宽700px</vxe-button>
      <vxe-button @click="tableWidth = '800px'">宽800px</vxe-button>
      <vxe-button @click="tableHeight = '300px'">高300px</vxe-button>
      <vxe-button @click="tableHeight = '500px'">高500px</vxe-button>
      <vxe-button @click="tableHeight = '800px'">高800px</vxe-button>
    </p>

    <div :style="{overflow: 'hidden', width: tableWidth, height: tableHeight}">
      <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const tableWidth = ref('')
const tableHeight = ref('300px')

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  autoResize: true,
  showFooter: true,
  height: '100%',
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
    { field: 'seq', type: 'seq' },
    { field: 'title', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 },
    { field: 'progress', title: '进度(%)', width: 100 }
  ],
  data: [
    { id: 10001, title: '任务R790', start: '2024-03-01', end: '2024-03-04', progress: 3 },
    { id: 10002, title: '任务C30456572349', start: '2024-03-03', end: '2024-03-08', progress: 10 },
    { id: 10003, title: '任务E563', start: '2024-03-03', end: '2024-03-11', progress: 90 },
    { id: 10004, title: '任务P687', start: '2024-03-05', end: '2024-03-05', progress: 15 },
    { id: 10005, title: '任务L8412430903', start: '2024-03-08', end: '2024-03-15', progress: 100 },
    { id: 10006, title: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 0 },
    { id: 10007, title: '任务V513802134450', start: '2024-03-15', end: '2024-03-24', progress: 70 },
    { id: 10008, title: '任务G110', start: '2024-03-20', end: '2024-03-29', progress: 50 },
    { id: 10009, title: '任务I802', start: '2024-03-19', end: '2024-03-20', progress: 5 },
    { id: 10010, title: '任务W61007467', start: '2024-03-12', end: '2024-03-20', progress: 30 },
    { id: 10011, title: '任务T903', start: '2024-03-01', end: '2024-03-04', progress: 20 },
    { id: 10012, title: '任务E425', start: '2024-03-02', end: '2024-03-08', progress: 50 },
    { id: 10013, title: '任务M226', start: '2024-03-08', end: '2024-03-11', progress: 10 }
  ],
  footerData: [
    { seq: '和值', title: 35, progress: 290 }
  ]
})
</script>
