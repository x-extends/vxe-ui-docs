<template>
  <div>
    <vxe-table-select v-model="val1" :columns="columnList" :options="tableData"></vxe-table-select>
    <vxe-table-select v-model="val2" :columns="columnList" :options="tableData" size="medium"></vxe-table-select>
    <vxe-table-select v-model="val3" :columns="columnList" :options="tableData" size="small"></vxe-table-select>
    <vxe-table-select v-model="val4" :columns="columnList" :options="tableData" size="mini"></vxe-table-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  value: number
  label: string
  role: string
  sex: string
  age: number
  address: string
}

const val1 = ref()
const val2 = ref(10002)
const val3 = ref()
const val4 = ref(10004)

const columnList = ref<VxeTableSelectPropTypes.Columns>([
  { type: 'radio', width: 70 },
  { field: 'label', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' },
  { field: 'address', title: 'Address' }
])

const tableData = ref<RowVO[]>([
  { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
</script>
