<template>
  <div>
    <vxe-table
      border
      height="400"
      :data="tableData">
      <vxe-column field="id" title="ID"></vxe-column>
      <vxe-column field="name" title="Name" ></vxe-column>
      <vxe-column field="sex" title="Sex" :filters="sexOptions" :filter-multiple="false"></vxe-column>
      <vxe-column field="age" title="Age" :filters="ageOptions"></vxe-column>
      <vxe-column field="time" title="Time"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '1', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 24, address: 'Shanghai' }
])

const sexOptions = ref<VxeColumnPropTypes.Filters>([
  { label: 'Man', value: '1' },
  { label: 'Woman', value: '0' }
])

const ageOptions = ref<VxeColumnPropTypes.Filters>([
  { label: '28', value: 28 },
  { label: '22', value: 22 },
  { label: '38', value: 38 }
])
</script>
