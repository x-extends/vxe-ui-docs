<template>
  <div>
    <p>
      <vxe-button @click="updateNameFilterOpts">更新name筛选条件</vxe-button>
    </p>

    <vxe-table
      border
      :data="tableData">
      <vxe-column field="id" title="ID"></vxe-column>
      <vxe-column field="name" title="Name" :filters="nameOptions"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="time" title="Time" sortable></vxe-column>
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
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 24, address: 'Shanghai' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 32, address: 'Shenzhen' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 28, address: 'Shanghai' }
])

const nameOptions = ref<{
  label: string
  value: number
}[]>([])

const updateNameFilterOpts = () => {
  nameOptions.value = [
    { label: 'id大于10002', value: 10002 },
    { label: 'id大于10003', value: 10003 }
  ]
}
</script>
