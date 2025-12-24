<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGanttProps, VxeGanttTaskType } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
  type?: string
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  taskViewConfig: {
    gridding: {
      leftSpacing: 1,
      rightSpacing: 4
    }
  },
  taskBarConfig: {
    showContent: true,
    showProgress: true,
    barStyle: {
      round: true,
      bgColor: '#fca60b',
      completedBgColor: '#65c16f'
    }
  },
  taskBarMilestoneConfig: {
    iconStatus: 'warning'
  },
  columns: [
    { field: 'title', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, title: '项目启动会议', start: '2024-03-01', end: '', progress: 0, type: VxeGanttTaskType.Milestone },
    { id: 10002, title: '项目启动与计划', start: '2024-03-03', end: '2024-03-08', progress: 80 },
    { id: 10003, title: '需求评审完成', start: '2024-03-03', end: '', progress: 0, type: VxeGanttTaskType.Milestone },
    { id: 10004, title: '技术及方案设计', start: '2024-03-05', end: '2024-03-11', progress: 80 },
    { id: 10005, title: '功能开发', start: '2024-03-08', end: '2024-03-15', progress: 70 },
    { id: 10007, title: '测试环境发布', start: '2024-03-11', end: '', progress: 0, type: VxeGanttTaskType.Milestone },
    { id: 10008, title: '系统测试', start: '2024-03-14', end: '2024-03-19', progress: 80 },
    { id: 10009, title: '测试完成', start: '2024-03-19', end: '', progress: 0, type: VxeGanttTaskType.Milestone },
    { id: 10010, title: '正式发布上线', start: '2024-03-20', end: '', progress: 0, type: VxeGanttTaskType.Milestone }
  ]
})
</script>
