<template>
  <div>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions">
      <template #checkbox1="{ row }">
        <vxe-checkbox v-model="row.checked1"></vxe-checkbox>
      </template>

      <template #checkbox2="{ row }">
        <vxe-checkbox v-model="row.checked2"></vxe-checkbox>
        <vxe-checkbox v-model="row.checked3"></vxe-checkbox>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
  checked1: boolean
  checked2: boolean
  checked3: boolean
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      columns: [
        { field: 'checkbox1', width: 60, slots: { default: 'checkbox1' } },
        { field: 'checkbox2', width: 100, slots: { default: 'checkbox2' } },
        { field: 'title', title: '任务名称', minWidth: 140 },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '2024-03-01', end: '2024-03-04', progress: 3, checked1: false, checked2: false, checked3: false },
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10, checked1: false, checked2: false, checked3: false },
        { id: 10003, title: 'B大工程', start: '2024-03-03', end: '2024-03-11', progress: 90, checked1: false, checked2: false, checked3: false },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15, checked1: false, checked2: false, checked3: false },
        { id: 10005, title: '地球净化项目', start: '2024-03-08', end: '2024-03-15', progress: 100, checked1: false, checked2: false, checked3: false },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5, checked1: false, checked2: false, checked3: false },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70, checked1: false, checked2: false, checked3: false },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50, checked1: false, checked2: false, checked3: false },
        { id: 10009, title: '地铁建设工程', start: '2024-03-19', end: '2024-03-20', progress: 5, checked1: false, checked2: false, checked3: false },
        { id: 10010, title: '铁路修建计划', start: '2024-03-12', end: '2024-03-20', progress: 10, checked1: false, checked2: false, checked3: false }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
