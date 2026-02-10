<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttProps, VxeGanttTaskType } from 'vxe-gantt'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  parentId: number | null
  title: string
  planStartDate: string
  planEndDate: string
  actualStartDate: string
  actualEndDate: string
  start?: string
  end?: string
  type?: string
  flag?: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      height: 500,
      loading: false,
      cellConfig: {
        height: 60
      },
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId'
      },
      taskConfig: {
        startField: 'start',
        endField: 'end',
        typeField: 'type'
      },
      taskBarSubviewConfig: {
        barStyle ({ row }) {
          if (row.flag === 1) {
            return {
              transform: 'translateY(-24px)'
            }
          }
          if (row.flag === 2) {
            return {
              transform: 'translateY(1px)',
              '--vxe-ui-gantt-view-task-bar-completed-background-color': '#31d231'
            }
          }
        }
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
        { field: 'title', title: '任务名称', minWidth: 100 },
        { field: 'planStartDate', title: '计划开始时间', width: 100 },
        { field: 'planEndDate', title: '计划结束时间', width: 100 },
        { field: 'actualStartDate', title: '实际开始时间', width: 100 },
        { field: 'actualEndDate', title: '实际结束时间', width: 100 }
      ],
      data: []
    }

    return {
      ganttOptions
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    // 模拟后端接口
    loadList () {
      this.ganttOptions.loading = true
      setTimeout(() => {
        const list: RowVO[] = [
          { id: 10001, parentId: null, title: 'A项目', planStartDate: '2024-03-03', planEndDate: '2024-03-15', actualStartDate: '2024-03-03', actualEndDate: '2024-03-12' },
          { id: 10002, parentId: null, title: 'B项目', planStartDate: '2024-03-10', planEndDate: '2024-03-25', actualStartDate: '2024-03-08', actualEndDate: '2024-03-16' },
          { id: 10003, parentId: null, title: 'C项目', planStartDate: '2024-03-20', planEndDate: '2024-04-10', actualStartDate: '2024-03-22', actualEndDate: '2024-04-01' },
          { id: 10004, parentId: null, title: 'D项目', planStartDate: '2024-03-28', planEndDate: '2024-04-19', actualStartDate: '2024-03-28', actualEndDate: '2024-04-12' },
          { id: 10005, parentId: null, title: 'E项目', planStartDate: '2024-04-05', planEndDate: '2024-04-28', actualStartDate: '2024-04-01', actualEndDate: '2024-04-24' }
        ]

        // 转成子任务视图
        const ganttData: RowVO[] = []
        list.forEach(item => {
          const currRow = XEUtils.assign({}, item, { type: VxeGanttTaskType.Subview })
          const planRow = XEUtils.assign({ }, item, {
            id: 10000000 + item.id,
            title: '计划',
            parentId: item.id,
            start: item.planStartDate,
            end: item.planEndDate,
            flag: 1
          })
          const actualRow = XEUtils.assign({}, item, {
            id: 20000000 + item.id,
            parentId: item.id,
            title: '实际',
            start: item.actualStartDate,
            end: item.actualEndDate,
            flag: 2
          })
          ganttData.push(currRow)
          ganttData.push(planRow)
          ganttData.push(actualRow)
        })

        this.ganttOptions.data = ganttData
        this.ganttOptions.loading = false
      }, 200)
    }
  }
})
</script>
