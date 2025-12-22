<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #date1FloatingFilter="{ option, column }">
        <el-date-picker v-model="option.data" value-format="YYYY-MM-DD" @change="changeFilterOption(option, column)"></el-date-picker>
      </template>

      <template #date2FloatingFilter="{ option, column }">
        <el-date-picker v-model="option.data" type="datetime" value-format="YYYY-MM-DD HH:mm:s" @change="changeFilterOption(option, column)"></el-date-picker>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes, VxeTableDefines } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const nameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'ElInput'
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  floatingFilterConfig: {
    enabled: true
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', width: 80 },
    {
      field: 'name',
      title: 'Name',
      minWidth: 140,
      filters: [
        { data: '' }
      ],
      filterRender: nameFilterRender
    },
    {
      field: 'date1',
      title: '日期',
      minWidth: 200,
      filters: [
        { data: '' }
      ],
      filterMethod ({ option, row, column }) {
        if (option.data) {
          return row[column.field] === option.data
        }
        return true
      },
      filterRender: {},
      slots: {
        floatingFilter: 'date1FloatingFilter'
      }
    },
    {
      field: 'date2',
      title: '日期带时间',
      minWidth: 200,
      filters: [
        { data: '' }
      ],
      filterMethod ({ option, row, column }) {
        if (option.data) {
          return row[column.field] === option.data
        }
        return true
      },
      filterRender: {},
      slots: {
        floatingFilter: 'date2FloatingFilter'
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', date1: '', date2: '' },
    { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-02 10:10:30' },
    { id: 10002, name: 'Test2', date1: '2018-01-04', date2: '2018-01-10 10:10:30' }
  ]
})

const changeFilterOption = (option: VxeColumnPropTypes.FilterItem, column: VxeTableDefines.ColumnInfo) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.updateFilterOptionStatus(option, !!option.data)
    $grid.saveFilterByEvent(new Event('change'), column)
  }
}
</script>
