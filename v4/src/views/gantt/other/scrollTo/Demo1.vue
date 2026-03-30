<template>
  <div>
    <div>
      <vxe-button @click="scrollColEvent('start')">定位 Start Date 列</vxe-button>
      <vxe-button @click="scrollColEvent('attr4')">定位 Attr4 列</vxe-button>
      <vxe-button @click="scrollColEvent('attr8')">定位 Attr8 列</vxe-button>
    </div>
    <div>
      <vxe-button @click="scrollTaskViewEvent(ganttOptions.data[3])">定位项目4任务视图</vxe-button>
      <vxe-button @click="scrollTaskViewEvent(ganttOptions.data[9])">定位项目10任务视图</vxe-button>
      <vxe-button @click="scrollTaskViewEvent(ganttOptions.data[15])">定位项目16任务视图</vxe-button>
    </div>
    <div>
      <vxe-button @click="scrollStartRowEvent()">定位首行</vxe-button>
      <vxe-button @click="scrollEndRowEvent()">定位末行</vxe-button>
      <vxe-button @click="scrollRowEvent(ganttOptions.data[3])">定位第4行</vxe-button>
      <vxe-button @click="scrollRowEvent(ganttOptions.data[9])">定位第10行</vxe-button>
      <vxe-button @click="scrollRowEvent(ganttOptions.data[15])">定位第16行</vxe-button>
    </div>
    <vxe-gantt ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGanttInstance, VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
  attr6: string
  attr7: string
  attr8: string
  attr9: string
  attr10: string
}

const ganttRef = ref<VxeGanttInstance<RowVO>>()

const ganttOptions = reactive<VxeGanttProps<RowVO> & { data: RowVO[] }>({
  border: true,
  showOverflow: true,
  height: 400,
  taskViewConfig: {
    tableStyle: {
      width: 500
    }
  },
  columns: [
    { type: 'seq', width: 60, fixed: 'left' },
    { field: 'title', title: 'Title', fixed: 'left', width: 140 },
    { field: 'start', title: 'Start Date', width: 100 },
    { field: 'end', title: 'End Date', width: 100 },
    { field: 'attr1', title: 'Attr1', width: 120 },
    { field: 'attr2', title: 'Attr2', width: 200 },
    { field: 'attr3', title: 'Attr3', width: 140 },
    { field: 'attr4', title: 'Attr4', width: 120 },
    { field: 'attr5', title: 'Attr5', width: 100 },
    { field: 'attr6', title: 'Attr6', width: 80 },
    { field: 'attr7', title: 'Attr7', width: 60 },
    { field: 'attr8', title: 'Attr8', width: 100 },
    { field: 'attr9', title: 'Attr9', width: 90 },
    { field: 'attr10', title: 'Attr10', width: 110 },
    { field: 'progress', title: 'Progress', width: 100 }
  ],
  data: [
    { id: 10001, title: '项目1', start: '2024-03-01', end: '2024-03-04', progress: 80, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10002, title: '项目2', start: '2024-03-04', end: '2024-03-08', progress: 50, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10003, title: '项目3', start: '2024-03-05', end: '2024-03-11', progress: 100, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10004, title: '项目4', start: '2024-03-04', end: '2024-03-10', progress: 70, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10005, title: '项目5', start: '2024-03-05', end: '2024-03-08', progress: 80, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10006, title: '项目6', start: '2024-03-06', end: '2024-03-11', progress: 100, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10007, title: '项目7', start: '2024-03-07', end: '2024-03-10', progress: 90, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10008, title: '项目8', start: '2024-03-08', end: '2024-03-15', progress: 80, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10009, title: '项目9', start: '2024-03-09', end: '2024-03-12', progress: 100, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10010, title: '项目10', start: '2024-03-10', end: '2024-03-15', progress: 60, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10011, title: '项目11', start: '2024-03-08', end: '2024-03-14', progress: 50, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10012, title: '项目12', start: '2024-03-13', end: '2024-03-19', progress: 70, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10013, title: '项目13', start: '2024-03-10', end: '2024-03-18', progress: 50, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10014, title: '项目14', start: '2024-03-16', end: '2024-03-21', progress: 80, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10015, title: '项目15', start: '2024-03-12', end: '2024-03-22', progress: 100, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10016, title: '项目16', start: '2024-03-19', end: '2024-03-27', progress: 90, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10017, title: '项目17', start: '2024-03-17', end: '2024-03-22', progress: 50, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10018, title: '项目18', start: '2024-03-26', end: '2024-04-06', progress: 100, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10019, title: '项目19', start: '2024-03-21', end: '2024-03-24', progress: 60, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' },
    { id: 10020, title: '项目20', start: '2024-03-25', end: '2024-04-04', progress: 70, attr1: '', attr2: '', attr3: '', attr4: '', attr5: '', attr6: '', attr7: '', attr8: '', attr9: '', attr10: '' }
  ]
})

const scrollColEvent = (field: string) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.scrollToColumn(field)
  }
}

const scrollStartRowEvent = () => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.scrollToStartRow()
  }
}

const scrollEndRowEvent = () => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.scrollToEndRow()
  }
}

const scrollRowEvent = (row: RowVO) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.scrollToRow(row)
  }
}

const scrollTaskViewEvent = (row: RowVO) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.scrollToTaskView(row)
  }
}
</script>
