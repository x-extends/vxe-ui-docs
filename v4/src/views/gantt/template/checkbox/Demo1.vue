<template>
  <div>
    <vxe-button @click="selectRowEvent(ganttOptions.data[1], true)">选中第二行</vxe-button>
    <vxe-button @click="selectRowEvent(ganttOptions.data[1], false)">取消选中第二行</vxe-button>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions">
      <template #checkbox_header="{ checked, indeterminate }">
        <span class="custom-checkbox" @click.stop="toggleAllCheckboxEvent">
          <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
          <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
          <i v-else class="vxe-icon-checkbox-unchecked"></i>
        </span>
      </template>

      <template #checkbox_cell="{ row, checked, indeterminate }">
        <span class="custom-checkbox" @click.stop="toggleCheckboxEvent(row)">
          <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
          <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
          <i v-else class="vxe-icon-checkbox-unchecked"></i>
        </span>
      </template>
    </vxe-gantt>
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

const ganttOptions = reactive<VxeGanttProps<RowVO> & {
  data: RowVO[]
}>({
  border: true,
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  columns: [
    { type: 'checkbox', width: 60, slots: { header: 'checkbox_header', checkbox: 'checkbox_cell' } },
    { field: 'title', title: '任务名称', minWidth: 140 },
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

const toggleAllCheckboxEvent = () => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.toggleAllCheckboxRow()
  }
}

const toggleCheckboxEvent = (row) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.toggleCheckboxRow(row)
  }
}
const selectRowEvent = (row: RowVO, checked: boolean) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.setCheckboxRow(row, checked)
  }
}
</script>
