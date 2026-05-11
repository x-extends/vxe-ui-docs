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
      <vxe-column title="Name" field="name" min-width="140" :edit-render="{ autoFocus: true }">
        <template #edit="{ row }">
          <el-input v-model="row.name"></el-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column title="级联选择" field="region" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <el-cascader v-model="row.region" :options="regionList"></el-cascader>
        </template>
        <template #default="{ row }">
          <span>{{ formatRegionLabel(row.region) }}</span>
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
  region: number[]
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const regionList = [
  {
    label: '北京',
    value: 1,
    children: [
      { value: 3, label: '东城区' },
      { value: 4, label: '西城区' }
    ]
  },
  {
    label: '上海',
    value: 21,
    children: [
      { value: 23, label: '黄浦区' },
      { value: 24, label: '卢湾区' }
    ]
  },
  {
    label: '广东',
    value: 42,
    children: [
      { value: 43, label: '广州市' },
      { value: 67, label: '深圳市' }
    ]
  }
]

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', region: [] },
  { id: 10002, name: 'Test2', region: [21, 24] }
])

const getLabelByValue = (vals: number[], list: typeof regionList, separator = '-') => {
  let currentList = list
  const labels = []
  for (let i = 0; i < vals.length; i++) {
    const targetValue = vals[i]
    const found = currentList.find(item => item.value === targetValue)
    if (!found) {
      return ''
    }
    labels.push(found.label)
    if (i < vals.length - 1) {
      if (!found.children) {
        return ''
      }
      currentList = found.children
    }
  }
  return labels.join(separator)
}

const formatRegionLabel = (regionVals: number[]) => {
  return getLabelByValue(regionVals, regionList)
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
