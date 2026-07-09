<template>
  <div>
    <vxe-gantt v-bind="ganttOptions">
      <template #title_edit="{ row }">
        <vxe-input v-model="row.num"></vxe-input>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    mode: 'cell',
    trigger: 'click'
  },
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  columns: [
    { type: 'seq', width: 60 },
    { field: 'title', title: '任务名称', minWidth: 160, editRender: {}, slots: { edit: 'title_edit' } },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10002, title: '任务C309', start: '2024-03-03', end: '2024-03-08', progress: 10 },
    { id: 10004, title: '任务P687', start: '2024-03-05', end: '2024-03-11', progress: 15 },
    { id: 10006, title: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 5 },
    { id: 10007, title: '任务V510', start: '2024-03-15', end: '2024-03-24', progress: 70 },
    { id: 10008, title: '任务G110', start: '2024-03-20', end: '2024-03-29', progress: 50 }
  ]
})
</script>
