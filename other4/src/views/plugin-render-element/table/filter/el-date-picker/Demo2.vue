<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="400"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :filters="nameFilterOptions" :filter-render="nameFilterRender"></vxe-column>
      <vxe-column title="日期" field="date1" width="200" :filters="date1FilterOptions" :filter-render="{}" :filter-method="date1FilterMethod">
        <template #filter="{ column }">
          <div v-for="(option, index) in column.filters" :key="index">
            <el-date-picker v-model="option.data" value-format="YYYY-MM-DD" @change="changeFilterOption(option)"></el-date-picker>
          </div>
        </template>
      </vxe-column>
      <vxe-column title="日期带时间" field="date2" width="200" :filters="date2FilterOptions" :filter-render="{}" :filter-method="date2FilterMethod">
        <template #filter="{ column }">
          <div v-for="(option, index) in column.filters" :key="index">
            <el-date-picker v-model="option.data" type="datetime" value-format="YYYY-MM-DD HH:mm:s" @change="changeFilterOption(option)"></el-date-picker>
          </div>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableInstance, VxeTableDefines, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

const tableRef = ref<VxeTableInstance>()

const nameFilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])
const nameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'ElInput'
})

const date1FilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])

const date2FilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', date1: '', date2: '' },
  { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-02 10:10:30' },
  { id: 10002, name: 'Test2', date1: '2018-01-04', date2: '2018-01-10 10:10:30' }
])

const date1FilterMethod: VxeColumnPropTypes.FilterMethod = ({ option, row, column }) => {
  if (option.data) {
    return row[column.field] === option.data
  }
  return true
}

const date2FilterMethod: VxeColumnPropTypes.FilterMethod = ({ option, row, column }) => {
  if (option.data) {
    return row[column.field] === option.data
  }
  return true
}

const changeFilterOption = (option: VxeTableDefines.FilterOption) => {
  const $table = tableRef.value
  if ($table) {
    $table.updateFilterOptionStatus(option, !!option.data)
  }
}
</script>
