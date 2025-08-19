<template>
  <div>
    <vxe-gantt v-bind="ganttOptions">
      <template #imgUrl_default="{ row }">
        <vxe-image :src="row.imgUrl" width="36" height="30"></vxe-image>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  imgUrl: string
  title: string
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  showOverflow: true,
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  columns: [
    { field: 'imgUrl', title: 'imgUrl', align: 'center', width: 100, slots: { default: 'imgUrl_default' } },
    { field: 'title', title: '任务名称', minWidth: 140 },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
    { id: 10004, title: '', start: '2024-03-05', end: '2024-03-11', progress: 15, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg' },
    { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
    { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg' },
    { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' }
  ]
})
</script>
