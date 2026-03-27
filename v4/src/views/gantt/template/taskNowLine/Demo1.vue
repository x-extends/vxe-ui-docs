<template>
  <div>
    <vxe-gantt v-bind="ganttOptions">
      <template #task-now-line>
        <div class="custom-nowline">
          <vxe-icon name="flag-fill"></vxe-icon>
        </div>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGanttProps } from 'vxe-gantt'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  title: string
  start: Date
  end: Date
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'title', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, title: 'A项目', start: XEUtils.getWhatDay(new Date(), -6), end: XEUtils.getWhatDay(new Date(), -2), progress: 40 },
    { id: 10002, title: '城市道路修理进度', start: XEUtils.getWhatDay(new Date(), -3), end: XEUtils.getWhatDay(new Date(), 3), progress: 60 },
    { id: 10003, title: 'B大工程', start: XEUtils.getWhatDay(new Date(), 1), end: XEUtils.getWhatDay(new Date(), 9), progress: 90 }
  ]
})
</script>

<style lang="scss" scoped>
.custom-nowline {
  position: absolute;
  top: 0;
  left: 0;
  color: red;
}
</style>
