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
      <vxe-column title="Name" field="name" min-width="140" :edit-render="{ autofocus: '.el-input__inner' }">
        <template #edit="{ row }">
          <el-input v-model="row.name"></el-input>
        </template>
      </vxe-column>
      <vxe-column title="下拉框" field="sex" width="200" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSexLabel([row.sex]) }}</span>
        </template>
        <template #edit="{ row }">
          <el-select v-model="row.sex">
            <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </template>
      </vxe-column>
      <vxe-column title="下拉框多选" field="sexList" width="200" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.sexList) }}</span>
        </template>
        <template #edit="{ row }">
          <el-select v-model="row.sexList" multiple>
            <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </template>
      </vxe-column>
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
  sex: string
  sexList: string[]
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const sexOptions = ref([
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', sex: '1', sexList: [] },
  { id: 10002, name: 'Test2', sex: '', sexList: ['0', '1'] }
])

const formatSexLabel = (sexList: string[]) => {
  if (sexList) {
    return sexList.map(sex => {
      const item = sexOptions.value.find(item => item.value === sex)
      return item ? item.label : sex
    }).join(',')
  }
  return ''
}

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
