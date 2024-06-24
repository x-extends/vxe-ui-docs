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
      <vxe-column title="Name" field="name" min-width="140"></vxe-column>
      <vxe-column title="Num" field="num" width="200" :cell-render="{ name: 'ARate' }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  num: number
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', num: 3 },
  { id: 10002, name: 'Test2', num: 2 }
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
