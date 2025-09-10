<template>
  <div>
    <p>
      <vxe-button @click="tableHeight = 300">高300px</vxe-button>
      <vxe-button @click="tableHeight = 500">高500px</vxe-button>
      <vxe-button @click="tableHeight = 800">高800px</vxe-button>
    </p>

    <vxe-tabs padding :height="tableHeight">
      <vxe-tab-pane title="页签1" name="1">
        <vxe-gantt v-bind="ganttOptions1"></vxe-gantt>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签2" name="2">
        <vxe-gantt v-bind="ganttOptions2"></vxe-gantt>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签3" name="3">
        <vxe-gantt v-bind="ganttOptions3"></vxe-gantt>
      </vxe-tab-pane>
    </vxe-tabs>
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
}

export default Vue.extend({
  data () {
    const ganttOptions1: VxeGanttProps<RowVO> = {
      border: true,
      height: '100%',
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
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 }
      ]
    }

    const ganttOptions2: VxeGanttProps<RowVO> = {
      border: true,
      height: '100%',
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
        { type: 'seq', width: 70 },
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 }
      ]
    }

    const ganttOptions3: VxeGanttProps<RowVO> = {
      border: true,
      height: '100%',
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
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 },
        { field: 'progress', title: '进度(%)', width: 100 }
      ],
      data: [
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 }
      ]
    }

    const tableHeight = 200

    return {
      ganttOptions1,
      ganttOptions2,
      ganttOptions3,
      tableHeight
    }
  }
})
</script>
