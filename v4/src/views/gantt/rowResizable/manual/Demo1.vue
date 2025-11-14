<template>
  <div>
    <vxe-button status="primary" @click="updateHeight(ganttOptions.data[1], 80)">设置第二行=80</vxe-button>
    <vxe-button status="primary" @click="updateHeight(10002, 140)">设置第二行=140</vxe-button>
    <vxe-button status="primary" @click="updateBatchHeight()">批量设置高度</vxe-button>
    <vxe-button status="success" @click="getHeight(ganttOptions.data[1])">获取第二行</vxe-button>
    <vxe-button status="success" @click="getHeight(10003)">获取 10003</vxe-button>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeGanttProps, VxeGanttInstance } from 'vxe-gantt'

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
  rowConfig: {
    resizable: true,
    keyField: 'id'
  },
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  taskViewConfig: {
    tableStyle: {
      width: 380
    }
  },
  columns: [
    { type: 'seq', width: 70, fixed: 'left' },
    { field: 'title', title: '任务名称', minWidth: 300 },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 },
    { field: 'progress', title: '进度(%)', width: 80, fixed: 'right' }
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

const updateHeight = (rowOrId: RowVO | string | number, height: number) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    $gantt.setRowHeight(rowOrId, height)
  }
}

const updateBatchHeight = () => {
  const $gantt = ganttRef.value
  if ($gantt) {
    const heightConf = {
      10001: 60,
      10003: 90,
      10004: 50
    }
    $gantt.setRowHeightConf(heightConf)
  }
}

const getHeight = (rowOrId: RowVO | string | number) => {
  const $gantt = ganttRef.value
  if ($gantt) {
    VxeUI.modal.message({
      title: '获取高度',
      content: `高度：${$gantt.getRowHeight(rowOrId)}px`
    })
  }
}
</script>
