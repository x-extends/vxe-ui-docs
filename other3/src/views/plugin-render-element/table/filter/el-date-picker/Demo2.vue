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
            <el-date-picker v-model="option.data" valueFormat="yyyy-MM-dd" @change="changeFilterOption(option)"></el-date-picker>
          </div>
        </template>
      </vxe-column>
      <vxe-column title="日期带时间" field="date2" width="200" :filters="date2FilterOptions" :filter-render="{}" :filter-method="date2FilterMethod">
        <template #filter="{ column }">
          <div v-for="(option, index) in column.filters" :key="index">
            <el-date-picker v-model="option.data" type="datetime" valueFormat="yyyy-MM-dd HH:mm:s" @change="changeFilterOption(option)"></el-date-picker>
          </div>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableInstance, VxeTableDefines, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', date1: '', date2: '' },
      { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-02 10:10:30' },
      { id: 10002, name: 'Test2', date1: '2018-01-04', date2: '2018-01-10 10:10:30' }
    ]

    const nameFilterOptions: VxeColumnPropTypes.Filters = [
      { data: '' }
    ]
    const nameFilterRender: VxeColumnPropTypes.FilterRender = {
      name: 'ElInput'
    }

    const date1FilterOptions: VxeColumnPropTypes.Filters = [
      { data: '' }
    ]

    const date2FilterOptions: VxeColumnPropTypes.Filters = [
      { data: '' }
    ]

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

    return {
      tableData,
      nameFilterOptions,
      nameFilterRender,
      date1FilterOptions,
      date2FilterOptions,
      date1FilterMethod,
      date2FilterMethod
    }
  },
  methods: {
    changeFilterOption  (option: VxeTableDefines.FilterOption) {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.updateFilterOptionStatus(option, !!option.data)
      }
    }
  }
})
</script>
