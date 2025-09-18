<template>
  <div>
    <vxe-table-select v-model="val1" :options="tableData" :option-props="{value: 'id', label: 'name'}" :grid-config="gridConfig"></vxe-table-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const val1 = ref()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 26, address: 'test abc' }
])

const gridConfig = reactive<VxeTableSelectPropTypes.GridConfig>({
  border: true,
  showFooter: true,
  footerData: [
    { radio: '合计', name: '567', role: '789', sex: '666' }
  ],
  columns: [
    { field: 'radio', type: 'radio', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address' }
  ]
})
</script>
