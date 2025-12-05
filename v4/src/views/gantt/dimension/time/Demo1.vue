<template>
  <div>
    <vxe-radio-group v-model="viewMode" @change="changeViewEvent">
      <vxe-radio-button label="1" content="天视图"></vxe-radio-button>
      <vxe-radio-button label="2" content="小时视图"></vxe-radio-button>
      <vxe-radio-button label="3" content="分钟视图"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGanttProps, VxeGanttPropTypes } from 'vxe-gantt'

interface RowVO {
  id: number
  name: string
  start: string
  end: string
  progress: number
}

const viewMode = ref('1')

const taskViewConfig = reactive<VxeGanttPropTypes.TaskViewConfig>({
  scales: ['date']
})

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  taskBarConfig: {
    showProgress: true,
    barStyle: {
      round: true,
      bgColor: '#fca60b',
      completedBgColor: '#65c16f'
    }
  },
  taskViewConfig,
  columns: [
    { field: 'name', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, name: 'A项目', start: '2024-03-02 08:30:00', end: '2024-03-03 09:45:30', progress: 3 },
    { id: 10002, name: '城市道路修理进度', start: '2024-03-02 12:30:10', end: '2024-03-03 08:20:30', progress: 10 },
    { id: 10003, name: 'B大工程', start: '2024-03-02 08:30:00', end: '2024-03-02 09:20:40', progress: 90 },
    { id: 10004, name: '超级大工程', start: '2024-03-02 10:20:45', end: '2024-03-02 10:50:45', progress: 15 },
    { id: 10005, name: '地球净化项目', start: '2024-03-02 10:00:20', end: '2024-03-02 11:02:30', progress: 100 },
    { id: 10006, name: '一个小目标项目', start: '2024-03-02 11:10:20', end: '2024-03-02 12:20:50', progress: 5 },
    { id: 10007, name: '某某计划', start: '2024-03-02 12:30:10', end: '2024-03-02 12:20:50', progress: 70 },
    { id: 10008, name: '某某科技项目', start: '2024-03-02 14:20:10', end: '2024-03-02 14:20:50', progress: 50 },
    { id: 10009, name: '地铁建设工程', start: '2024-03-04 16:30:20', end: '2024-03-05 16:50:30', progress: 5 },
    { id: 10010, name: '铁路修建计划', start: '2024-03-03 15:20:20', end: '2024-03-04 10:15:30', progress: 10 }
  ]
})
const changeViewEvent = () => {
  switch (viewMode.value) {
    case '1':
      taskViewConfig.scales = ['date']
      break
    case '2':
      taskViewConfig.scales = ['date', 'hour']
      break
    case '3':
      taskViewConfig.scales = ['hour', 'minute']
      break
  }
}
</script>
