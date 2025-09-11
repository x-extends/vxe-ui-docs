<template>
  <div>
    <vxe-gantt v-bind="ganttOptions">
      <template #header-tooltip="{ column }">
        <div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
        </div>
      </template>
      <template #tooltip="{ row, column }">
        <div style="width: 800px;">
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
        </div>
      </template>
      <template #footer-tooltip="{ row, column }">
        <div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
        </div>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="tsx">
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
    const ganttOptions: VxeGanttProps<RowVO> = {
      height: 300,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      showFooter: true,
      headerTooltipConfig: {
        maxWidth: 200,
        maxHeight: 100
      },
      tooltipConfig: {
        maxWidth: 400,
        maxHeight: 300
      },
      footerTooltipConfig: {
        maxWidth: 200,
        maxHeight: 100
      },
      taskViewConfig: {
        tableStyle: {
          width: 380
        }
      },
      taskBarConfig: {
        barStyle: {
          round: true
        }
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'title', title: '任务名称任务名称任务名称任务名称任务名称任务名称任务名称任务名称任务名称任务名称任务名称任务名称', minWidth: 140 },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 },
        { field: 'progress', title: '进度(%)', width: 80 }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '2024-03-01', end: '2024-03-04', progress: 3 },
        { id: 10002, title: '城市道路修理进度城市道路修理进度城市道路修理进度城市道路修理进度城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10003, title: 'B大工程B大工程B大工程B大工程B大工程B大工程B大工程B大工程', start: '2024-03-03', end: '2024-03-11', progress: 90 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10005, title: '地球净化项目地球净化项目地球净化项目地球净化项目地球净化项目地球净化项目地球净化项目地球净化项目地球净化项目', start: '2024-03-08', end: '2024-03-15', progress: 100 },
        { id: 10006, title: '一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 }
      ],
      footerData: [
        { seq: '合计', title: '888888888888888888888888888888888888888888888888888888888888', progress: '999999999999999999999999999999999999999999999999999999999999999' }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
