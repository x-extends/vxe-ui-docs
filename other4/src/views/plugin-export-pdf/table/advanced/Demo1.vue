<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
    <vxe-table
      border
      ref="tableRef"
      :export-config="{type: 'pdf'}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
  { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
  { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport()
  }
}
</script>
