<template>
  <div>
    <vxe-gantt
      v-bind="ganttOptions"
      :style="{
        '--vxe-ui-gantt-view-split-bar-width': '10px'
      }">
    </vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttProps, VxeGanttPropTypes } from 'vxe-gantt'

interface RowVO {
  id: number
  name: string
  start: string
  end: string
  progress: number
}

export default Vue.extend({
  data () {
    const taskSplitConfig: VxeGanttPropTypes.TaskSplitConfig = {
      resize: false
    }

    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      taskSplitConfig,
      columns: [
        { field: 'name', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10002, name: '任务C30456572349', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, name: '任务P687', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, name: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, name: '任务V513802134450', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, name: '任务G110', start: '2024-03-20', end: '2024-03-29', progress: 50 }
      ]
    }

    return {
      ganttOptions,
      taskSplitConfig
    }
  }
})
</script>
