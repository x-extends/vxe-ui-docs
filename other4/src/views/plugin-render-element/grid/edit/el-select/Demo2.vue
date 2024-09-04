<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #edit_name="{ row }">
        <el-input v-model="row.name"></el-input>
      </template>

      <template #default_sex="{ row }">
        <span>{{ formatSexLabel([row.sex]) }}</span>
      </template>
      <template #edit_sex="{ row }">
        <el-select v-model="row.sex">
          <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </template>

      <template #default_sexList="{ row }">
        <span>{{ formatSexLabel(row.sexList) }}</span>
      </template>
      <template #edit_sexList="{ row }">
        <el-select v-model="row.sexList" multiple>
          <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  sexList: string[]
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexOptions = ref([
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

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
    { field: 'name', title: 'Name', minWidth: 140, editRender: { autofocus: '.el-input__inner' }, slots: { edit: 'edit_name' } },
    { field: 'sex', title: '下拉框', width: 200, editRender: {}, slots: { default: 'default_sex', edit: 'edit_sex' } },
    { field: 'sexList', title: '下拉框多选', width: 200, editRender: {}, slots: { default: 'default_sexList', edit: 'edit_sexList' } }
  ],
  data: [
    { id: 10001, name: 'Test1', sex: '1', sexList: [] },
    { id: 10002, name: 'Test2', sex: '', sexList: ['0', '1'] }
  ]
})

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
