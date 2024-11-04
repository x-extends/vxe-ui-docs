<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      toolbarConfig: {
        export: true
      },
      exportConfig: {
        type: 'xlsx'
      },
      mergeCells: [
        { row: 0, col: 2, rowspan: 2, colspan: 2 },
        { row: 2, col: 1, rowspan: 3, colspan: 2 }
      ],
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
        { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
        { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10005, name: '小七', role: 'Designer', sex: 'Man', age: 37, address: '广东省' },
        { id: 10006, name: '小八', role: 'Designer', sex: 'Man', age: 39, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
