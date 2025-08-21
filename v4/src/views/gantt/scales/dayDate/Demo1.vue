<template>
  <div>
    <vxe-date-picker v-model="selectMonth" type="month"></vxe-date-picker>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
  owner: string
}

const selectMonth = ref('2025-01-01')

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  height: 500,
  taskViewConfig: {
    scales: ['day', 'date'],
    tableStyle: {
      width: 320
    }
  },
  columns: [
    { field: 'title', title: '任务名称' },
    { field: 'owner', title: '负责人', width: 120 }
  ],
  data: [
    { id: 10001, title: '确定方案', start: '2024-03-03', end: '2024-03-13', owner: '张三', progress: 100 },
    { id: 10002, title: '车辆管理规范', start: '2024-03-04', end: '2024-03-06', owner: '小徐', progress: 100 },
    { id: 10003, title: '保安队伍制度', start: '2024-03-04', end: '2024-03-06', owner: '小红', progress: 100 },
    { id: 10004, title: '6s体系的建立', start: '2024-03-05', end: '2024-03-07', owner: '李四', progress: 100 },
    { id: 10005, title: '6体系的推广', start: '2024-03-05', end: '2024-03-07', owner: '李四', progress: 100 },
    { id: 10006, title: '员工手册制定', start: '2024-03-06', end: '2024-03-08', owner: '小明', progress: 100 },
    { id: 10007, title: '宿舍环境管理', start: '2024-03-11', end: '2024-03-13', owner: '小徐', progress: 100 },
    { id: 10008, title: '固定资产盘点', start: '2024-03-07', end: '2024-03-08', owner: '李四', progress: 100 },
    { id: 10009, title: '日常检查维护', start: '2024-03-07', end: '2024-03-08', owner: '小明', progress: 100 },
    { id: 10010, title: '办公用品管理', start: '2024-03-01', end: '2024-03-01', owner: '张三', progress: 100 },
    { id: 10011, title: '公司办公费用控制', start: '2024-03-11', end: '2024-03-16', owner: '小红', progress: 100 },
    { id: 10012, title: '办公室管理规定', start: '2024-03-19', end: '2024-03-19', owner: '张三', progress: 100 }
  ]
})
</script>
