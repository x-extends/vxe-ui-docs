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
      height: 400,
      rowConfig: {
        resizable: true
      },
      columns: [
        { type: 'seq', width: 70, rowResize: true },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Test', sex: 'Man', age: 56, address: 'Guangzhou' },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 38, address: 'Guangzhou' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
        { id: 10009, name: 'Test9', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10010, name: 'Test10', role: 'Test', sex: 'Women', age: 34, address: 'test abc' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
