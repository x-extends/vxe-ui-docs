<template>
  <div>
    <vxe-gantt v-bind="ganttOptions" v-on="ganttEvents"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGanttProps, VxeGanttListeners } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  showOverflow: true,
  border: true,
  height: 500,
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  taskViewConfig: {
    tableStyle: {
      width: 480
    }
  },
  formConfig: {
    data: {
      title: '',
      start: '',
      end: ''
    },
    items: [
      { field: 'title', title: '任务名称', span: 8, itemRender: { name: 'VxeInput' } },
      { field: 'start', title: '开始时间', span: 8, itemRender: { name: 'VxeDatePicker' } },
      { field: 'end', title: '结束时间', span: 8, itemRender: { name: 'VxeDatePicker' } },
      { field: 'progress', title: '进度', span: 8, folding: true, itemRender: { name: 'VxeNumberInput' } },
      {
        span: 24,
        collapseNode: true,
        align: 'center',
        itemRender: {
          name: 'VxeButtonGroup',
          options: [
            { type: 'submit', content: '搜索', status: 'primary' },
            { type: 'reset', content: '重置' }
          ]
        }
      }
    ]
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'title', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
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

const ganttEvents: VxeGanttListeners = {
  formSubmit () {
    console.log('form submit')
  },
  formReset () {
    console.log('form reset')
  }
}
</script>
