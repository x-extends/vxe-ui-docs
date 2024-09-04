<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :edit-config="{ trigger: 'click', mode: 'row'}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :edit-render="{ name: 'ElInput' }"></vxe-column>
      <vxe-column title="日期" field="date1" width="200" :edit-render="{ name: 'ElDatePicker', props: { type: 'date', valueFormat: 'YYYY-MM-DD' } }"></vxe-column>
      <vxe-column title="日期带时间" field="date2" width="200" :edit-render="{ name: 'ElDatePicker', props: { type: 'datetime', valueFormat: 'YYYY-MM-DD HH:mm:ss' } }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', date1: '', date2: '' },
  { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-01 10:10:30' }
])

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const record = {
      flag: false
    }
    const { row: newRow } = await $table.insert(record)
    $table.setEditRow(newRow)
  }
}

const saveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      ElMessageBox.alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)
    } else {
      ElMessageBox.alert('数据未改动！')
    }
  }
}
</script>
