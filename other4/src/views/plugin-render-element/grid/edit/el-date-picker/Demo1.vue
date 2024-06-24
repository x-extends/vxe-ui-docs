<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

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
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'ElInput' } },
    { field: 'date1', title: '日期', width: 200, editRender: { name: 'ElDatePicker', props: { type: 'date', format: 'YYYY-MM-DD' } } },
    { field: 'date2', title: '日期带时间', width: 220, editRender: { name: 'ElDatePicker', props: { type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' } } }

  ],
  data: [
    { id: 10001, name: 'Test1', date1: '', date2: '' },
    { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-01 10:10:30' }
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
      ElMessageBox.alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)
    } else {
      ElMessageBox.alert('数据未改动！')
    }
  }
}
</script>
