<template>
  <div>
    <vxe-gantt v-bind="ganttOptions">
      <template #form>
        <vxe-notice-bar direction="right" style="background: dodgerblue;">自定义表单区域</vxe-notice-bar>
      </template>

      <template #toolbarButtons>
        <vxe-notice-bar direction="left" style="background: cadetblue;width: 100%;">自定义工具栏左侧</vxe-notice-bar>
      </template>

      <template #toolbarTools>
        <vxe-notice-bar direction="right" style="background: orange;">自定义工具栏右侧</vxe-notice-bar>
      </template>

      <template #top>
        <vxe-notice-bar direction="right" content="自定义顶部区域" style="background: green;color: #fff;"></vxe-notice-bar>
      </template>

      <template #left>
        <div style="background: orchid;width: 80px;height: 100%;">自定义表格左边区域</div>
      </template>

      <template #right>
        <div style="background: bisque;width: 80px;height: 100%;">自定义表格右边区域</div>
      </template>

      <template #bottom>
        <vxe-notice-bar direction="right" content="自定义底部区域" style="background: palegreen;"></vxe-notice-bar>
      </template>

      <template #asideLeft>
        <div style="background: darkcyan;width: 80px;height: 100%;">自定义左侧区域</div>
      </template>

      <template #asideRight>
        <div style="background: aqua;width: 80px;height: 100%;">自定义右侧区域</div>
      </template>

      <template #pager>
        <vxe-notice-bar direction="left" style="background: red;">自定义分页区域</vxe-notice-bar>
      </template>
    </vxe-gantt>
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
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      height: 400,
      showOverflow: true,
      customConfig: {
        mode: 'drawer'
      },
      toolbarConfig: {
        custom: true,
        zoom: true,
        slots: {
          buttons: 'toolbarButtons',
          tools: 'toolbarTools'
        }
      },
      layouts: [
        ['Top', 'Form'],
        ['Toolbar', 'Pager', 'Gantt'],
        ['Bottom']
      ],
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      columns: [
        { field: 'title', title: '任务名称', minWidth: 140 },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
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
    }

    return {
      ganttOptions
    }
  }
})
</script>
