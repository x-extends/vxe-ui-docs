<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  sexList: string[]
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'ASelect',
  options: [
    { label: '男', value: '1' },
    { label: '女', value: '0' }
  ]
})

const sexListEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'ASelect',
  props: {
    mode: 'multiple'
  },
  options: [
    { label: '男', value: '1' },
    { label: '女', value: '0' }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', title: 'Number', width: 80 },
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'AInput' } },
    { field: 'sex', title: '下拉框', width: 200, editRender: sexEditRender },
    { field: 'sexList', title: '下拉框多选', width: 200, editRender: sexListEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', sex: '1', sexList: [] },
    { id: 10002, name: 'Test2', sex: '', sexList: ['0', '1'] }
  ]
})

const insertEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      nickname: ''
    }
    const { row: newRow } = await $grid.insert(record)
    $grid.setEditRow(newRow)
  }
}

const saveEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      Modal.success({
        title: '提示',
        content: `insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`
      })
    } else {
      Modal.info({
        title: '提示',
        content: '数据未改动！'
      })
    }
  }
}
</script>
