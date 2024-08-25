<template>
  <div>
    <vxe-table
      border
      height="400"
      ref="tableRef"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :filters="nameFilterOptions" :filter-render="nameFilterRender"></vxe-column>
      <vxe-column title="输入框" field="nickname" width="200" :filters="nicknameFilterOptions" :filter-render="{}" :filter-method="nicknameFilterMethod">
        <template #filter="{ column }">
          <div v-for="(option, index) in column.filters" :key="index">
            <el-input v-model="option.data" @input="changeFilterOption(option)"></el-input>
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
  nickname: string
}

const tableRef = ref<VxeTableInstance>()

const nameFilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])
const nameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'ElInput'
})

const nicknameFilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'Nickname11' },
  { id: 10002, name: 'Test2', nickname: '' },
  { id: 10002, name: 'Test3', nickname: 'Nickname323' }
])

const nicknameFilterMethod: VxeColumnPropTypes.FilterMethod = ({ option, row, column }) => {
  if (option.data) {
    return `${row[column.field]}`.indexOf(option.data) > -1
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
