<template>
  <div>
    <vxe-table
      border
      :data="tableData">
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="role" title="Role" width="auto"></vxe-column>
      <vxe-column field="sex" title="Sex" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="auto"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop Develop Develop ', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test Test Test Test Test Test Test', sex: 'Women', age: 22, address: 'Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai' }
])
</script>
