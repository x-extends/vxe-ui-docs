<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttProps, VxeGanttTaskType } from 'vxe-gantt'

interface RowVO {
  id: number
  parentId: number | null
  title: string
  start: string
  end: string
  progress: number
  type?: string
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      height: 500,
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId'
      },
      taskBarSubviewConfig: {
        showOverview: true
      },
      taskBarConfig: {
        showContent: true,
        barStyle: {
          round: true
        }
      },
      taskViewConfig: {
        tableStyle: {
          width: 480
        }
      },
      columns: [
        { field: 'title', title: '任务名称', minWidth: 140, treeNode: true },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 },
        { field: 'progress', title: '进度(%)', width: 80 }
      ],
      data: [
        { id: 10001, parentId: null, title: '任务R790', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10002, parentId: 10001, title: '任务C309', start: '2024-03-03', end: '2024-03-08', progress: 70 },
        { id: 10003, parentId: null, title: '任务E563', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10004, parentId: 10003, title: '任务P687', start: '2024-03-05', end: '2024-03-08', progress: 50 },
        { id: 10005, parentId: 10003, title: '任务L843', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10006, parentId: 10003, title: '任务B567', start: '2024-03-13', end: '2024-03-21', progress: 60 },
        { id: 10007, parentId: 10005, title: '任务V510', start: '2024-03-22', end: '2024-03-24', progress: 70 },
        { id: 10008, parentId: null, title: '任务G110', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10009, parentId: 10008, title: '任务I802', start: '2024-03-19', end: '2024-03-20', progress: 50 },
        { id: 10010, parentId: 10008, title: '任务W667', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10011, parentId: 10008, title: '任务T903', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10012, parentId: null, title: '任务E425', start: '2024-03-29', end: '2024-04-01', progress: 60 },
        { id: 10013, parentId: 10010, title: '任务M226', start: '2024-03-08', end: '2024-03-11', progress: 70 },
        { id: 10014, parentId: 10010, title: '任务F411', start: '2024-03-12', end: '2024-03-16', progress: 100 },
        { id: 10015, parentId: 10011, title: '任务K778', start: '2024-03-18', end: '2024-03-19', progress: 80 },
        { id: 10016, parentId: 10011, title: '任务D554', start: '2024-03-20', end: '2024-03-22', progress: 10 },
        { id: 10017, parentId: 10011, title: '任务S544', start: '2024-03-24', end: '2024-03-29', progress: 60 },
        { id: 10018, parentId: null, title: '任务B980', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10019, parentId: 10018, title: '任务X443', start: '2024-03-20', end: '2024-03-22', progress: 80 },
        { id: 10020, parentId: 10018, title: '任务Z8063', start: '2024-03-23', end: '2024-03-25', progress: 60 },
        { id: 10021, parentId: 10018, title: '任务Q2547', start: '2024-03-26', end: '2024-03-29', progress: 60 },
        { id: 10022, parentId: null, title: '任务U9630', start: '2024-03-19', end: '2024-03-26', progress: 70 },
        { id: 10023, parentId: null, title: '任务R427953', start: '', end: '', progress: 0, type: VxeGanttTaskType.Subview },
        { id: 10024, parentId: 10023, title: '任务H467983', start: '2024-03-09', end: '2024-03-16', progress: 50 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
