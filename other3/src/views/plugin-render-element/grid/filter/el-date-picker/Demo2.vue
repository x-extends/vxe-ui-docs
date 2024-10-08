<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #date1Filter="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <el-date-picker v-model="option.data" value-format="YYYY-MM-DD" @change="changeFilterOption(option)"></el-date-picker>
        </div>
      </template>

      <template #date2Filter="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <el-date-picker v-model="option.data" type="datetime" value-format="YYYY-MM-DD HH:mm:s" @change="changeFilterOption(option)"></el-date-picker>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

export default Vue.extend({
  data () {
    const nameFilterRender: VxeColumnPropTypes.FilterRender = {
      name: 'ElInput'
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 400,
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
            filter: 'date1Filter'
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
            filter: 'date2Filter'
          }
        }
      ],
      data: [
        { id: 10001, name: 'Test1', date1: '', date2: '' },
        { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-02 10:10:30' },
        { id: 10002, name: 'Test2', date1: '2018-01-04', date2: '2018-01-10 10:10:30' }
      ]
    }

    return {
      gridOptions,
      nameFilterRender
    }
  },
  methods: {
    changeFilterOption (option: VxeColumnPropTypes.FilterItem) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.updateFilterOptionStatus(option, !!option.data)
      }
    }
  }
})
</script>
