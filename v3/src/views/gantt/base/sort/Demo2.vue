<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttProps } from 'vxe-gantt'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  title: string
  start: number
  end: number
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      height: 300,
      rowConfig: {
        isHover: true
      },
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
        {
          field: 'title',
          title: 'Title',
          width: 140,
          sortable: true,
          sortBy ({ row }) {
            // 按名称长度进行排序
            return row.title.length
          }
        },
        {
          field: 'start',
          title: '日期',
          width: 180,
          sortable: true,
          sortBy: 'start', // 强制使用该字段进行排序，默认是按 formatter 的内容进行排序
          formatter ({ cellValue }) {
            return XEUtils.toDateString(cellValue)
          }
        },
        {
          field: 'end',
          title: '日期',
          width: 180,
          sortable: true,
          sortBy: 'end',
          formatter ({ cellValue }) {
            return XEUtils.toDateString(cellValue)
          }
        }
      ],
      data: [
        { id: 10001, title: 'A项目', start: 1759892956721, end: 1760892956721, progress: 3 },
        { id: 10002, title: '城市道路修理进度', start: 1757892956721, end: 1761892956721, progress: 10 },
        { id: 10003, title: 'B大工程', start: 1756992956721, end: 1757792956721, progress: 90 },
        { id: 10004, title: '超级大工程', start: 1757692956721, end: 1758692956721, progress: 15 },
        { id: 10005, title: '地球净化项目', start: 1756892956721, end: 1757992956721, progress: 100 }
      ]
    }

    return {
      ganttOptions
    }
  }
})
</script>
