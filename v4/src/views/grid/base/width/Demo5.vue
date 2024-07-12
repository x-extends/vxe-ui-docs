<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: '80' },
    { field: 'name', title: 'Name', width: 300 },
    { field: 'role', title: 'Role', width: 'auto' },
    { field: 'sex', title: 'Sex', width: 200 },
    { field: 'address', title: 'Address', width: 'auto' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop Develop Develop ', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test Test Test Test Test Test Test', sex: 'Women', age: 22, address: 'Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai' }
  ]
})
</script>
