<template>
  <div>
    <vxe-button @click="exportEvent">直接导出 PDF 文件</vxe-button>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
  { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
  { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const footerData: VxeTablePropTypes.FooterData = [
  { seq: '合计', name: '12人', age: '356' }
]

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      type: 'pdf'
    })
  }
}
</script>
