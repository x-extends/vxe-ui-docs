<template>
  <div>
    <vxe-gantt ref="ganttRef" v-bind="ganttOptions" v-on="ganttEvents"></vxe-gantt>

    <vxe-modal
      resize
      destroy-on-close
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showEditPopup"
      title="编辑任务"
      width="400"
      height="350"
      :confirm-closable="false"
      @confirm="confirmEvent">
      <vxe-form ref="formRef" v-bind="formOptions"></vxe-form>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGanttProps, VxeGanttInstance, VxeGanttListeners } from 'vxe-gantt'
import { VxeUI, VxeFormProps, VxeFormInstance } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  startDate: string
  endDate: string
  progress: number
}

const showEditPopup = ref(false)
const selectRow = ref<RowVO | null>(null)

const ganttRef = ref<VxeGanttInstance<RowVO>>()
const formRef = ref<VxeFormInstance<RowVO>>()

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
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
      width: 420
    }
  },
  columns: [
    { field: 'name', title: '任务名称' },
    { field: 'startDate', title: '开始时间', width: 100 },
    { field: 'endDate', title: '结束时间', width: 100 },
    { field: 'progress', title: '进度', width: 60 }
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
})

const formOptions = reactive<VxeFormProps>({
  titleWidth: 'auto',
  titleAlign: 'right',
  titleColon: true,
  data: {
    name: '',
    startDate: '',
    endDate: '',
    progress: 0
  },
  rules: {
    name: [
      { required: true, message: '任务名称必填' }
    ],
    startDate: [
      { required: true, message: '开始时间必填' }
    ],
    endDate: [
      { required: true, message: '结束时间必填' }
    ],
    progress: [
      { required: true, message: '进度必填' }
    ]
  },
  items: [
    { field: 'name', title: '任务名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'startDate', title: '开始时间', span: 24, itemRender: { name: 'VxeDatePicker' } },
    { field: 'endDate', title: '结束时间', span: 24, itemRender: { name: 'VxeDatePicker' } },
    { field: 'progress', title: '进度', span: 24, itemRender: { name: 'VxeNumberInput', props: { type: 'integer', min: 0, max: 100 } } }
  ]
})

const ganttEvents: VxeGanttListeners<RowVO> = {
  taskBarClick ({ row }) {
    XEUtils.destructuring(formOptions.data, row)
    selectRow.value = row
    showEditPopup.value = true
  }
}

const confirmEvent = async () => {
  const $form = formRef.value
  if ($form) {
    const errMap = await $form.validate()
    if (!errMap) {
      const $gantt = ganttRef.value
      const row = selectRow.value
      if (row) {
        row.name = formOptions.data.name
        row.startDate = formOptions.data.startDate
        row.endDate = formOptions.data.endDate
        row.progress = formOptions.data.progress
      }
      showEditPopup.value = false
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
      if ($gantt) {
      // 修改任务时间后刷新视图
        $gantt.refreshTaskView()
      }
    }
  }
}
</script>
