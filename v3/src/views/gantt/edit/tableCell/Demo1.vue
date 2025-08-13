<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增</vxe-button>

    <vxe-gantt
      ref="ganttRef"
      v-bind="ganttOptions"
      @edit-closed="editClosedEvent">
    </vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGanttInstance, VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  name: string
  startDate: string
  endDate: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      taskConfig: {
        startField: 'startDate',
        endField: 'endDate',
        progressField: 'progress'
      },
      taskBarConfig: {
        showProgress: true,
        barStyle: {
          bgColor: '#fca60b',
          completedBgColor: '#65c16f'
        }
      },
      taskViewConfig: {
        tableStyle: {
          width: 520
        }
      },
      editConfig: {
        mode: 'cell',
        trigger: 'click'
      },
      columns: [
        { field: 'name', title: '任务名称' },
        { field: 'startDate', title: '开始时间', width: 140, editRender: { name: 'VxeDatePicker' } },
        { field: 'endDate', title: '结束时间', width: 140, editRender: { name: 'VxeDatePicker' } },
        { field: 'progress', title: '进度', width: 110, editRender: { name: 'VxeNumberInput', props: { type: 'integer', min: 0, max: 100 } } }
      ],
      data: [
        { id: 10001, name: 'A项目', startDate: '2024-03-01', endDate: '2024-03-04', progress: 3 },
        { id: 10002, name: '城市道路修理进度', startDate: '2024-03-03', endDate: '2024-03-08', progress: 10 },
        { id: 10003, name: 'B大工程', startDate: '2024-03-03', endDate: '2024-03-11', progress: 90 },
        { id: 10004, name: '超级大工程', startDate: '2024-03-05', endDate: '2024-03-11', progress: 15 },
        { id: 10005, name: '地球净化项目', startDate: '2024-03-08', endDate: '2024-03-15', progress: 100 },
        { id: 10006, name: '一个小目标项目', startDate: '2024-03-10', endDate: '2024-03-21', progress: 5 },
        { id: 10007, name: '某某计划', startDate: '2024-03-15', endDate: '2024-03-24', progress: 70 },
        { id: 10008, name: '某某科技项目', startDate: '2024-03-20', endDate: '2024-03-29', progress: 50 },
        { id: 10009, name: '地铁建设工程', startDate: '2024-03-19', endDate: '2024-03-20', progress: 5 },
        { id: 10010, name: '铁路修建计划', startDate: '2024-03-12', endDate: '2024-03-20', progress: 10 }
      ]
    }

    return {
      ganttOptions
    }
  },
  methods: {
    addEvent () {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        const record = {
          name: `新任务_${new Date().getTime()}`
        }
        $gantt.insert(record)
      }
    },
    editClosedEvent () {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
      // 修改任务时间后刷新视图
        $gantt.refreshTaskView()
      }
    }
  }
})
</script>
