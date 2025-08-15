<template>
  <div>
    <p>
      <vxe-button @click="setSelectRow(0)">设置第一行选中（如果被禁用，不可选中）</vxe-button>
      <vxe-button @click="setSelectRow(1)">设置第二行选中</vxe-button>
      <vxe-button @click="clearRadioRowEvent">清除所有行选中</vxe-button>
    </p>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
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

const ganttOptions = reactive<VxeGanttProps<RowVO> & { data: RowVO[] }>({
  border: true,
  height: 300,
  radioConfig: {
    labelField: 'title',
    checkMethod ({ row }) {
      return row.progress > 30
    }
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
    { type: 'radio', title: '请选择' },
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

const setSelectRow = (index: number) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.setRadioRow(ganttOptions.data[index])
  }
}

const clearRadioRowEvent = () => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.clearRadioRow()
  }
}
</script>
