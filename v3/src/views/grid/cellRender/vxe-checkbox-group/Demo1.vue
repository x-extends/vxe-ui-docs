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
  role: string
  hobbyList1: string[]
  hobbyList2: string[]
}

export default Vue.extend({
  data () {
    const hobbyList1CellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeCheckboxGroup',
      props: {
        disabled: true
      },
      options: [
        { label: '爬山', value: '1' },
        { label: '游泳', value: '2' },
        { label: '干饭', value: '3' }
      ]
    }

    const hobbyList2CellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeCheckboxGroup',
      options: [
        { label: '爬山', value: '1' },
        { label: '游泳', value: '2' },
        { label: '干饭', value: '3' }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'hobbyList1', title: '只读', width: 300, cellRender: hobbyList1CellRender },
        { field: 'hobbyList2', title: '编辑', width: 300, cellRender: hobbyList2CellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', hobbyList1: [], hobbyList2: ['1', '2'] },
        { id: 10002, name: 'Test2', role: 'Test', hobbyList1: ['2'], hobbyList2: [] },
        { id: 10003, name: 'Test3', role: 'PM', hobbyList1: ['1', '3'], hobbyList2: ['2'] }
      ]
    }

    return {
      gridOptions,
      hobbyList1CellRender,
      hobbyList2CellRender
    }
  }
})
</script>
