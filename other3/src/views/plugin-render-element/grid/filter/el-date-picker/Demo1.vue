<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

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

    const date1FilterRender: VxeColumnPropTypes.FilterRender = {
      name: 'ElDatePicker',
      props: {
        valueFormat: 'YYYY-MM-DD'
      }
    }

    const date2FilterRender: VxeColumnPropTypes.FilterRender = {
      name: 'ElDatePicker',
      props: {
        type: 'datetime',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      }
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
          filterRender: date1FilterRender
        },
        {
          field: 'date2',
          title: '日期带时间',
          minWidth: 200,
          filters: [
            { data: '' }
          ],
          filterRender: date2FilterRender
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
      nameFilterRender,
      date1FilterRender,
      date2FilterRender
    }
  }
})
</script>
