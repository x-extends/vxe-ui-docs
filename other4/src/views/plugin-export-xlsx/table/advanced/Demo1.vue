<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      :export-config="{type: 'xlsx'}"
      :data="tableData"
      :merge-cells="mergeCells"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import type { VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

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
  { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10005, name: '小七', role: 'Designer', sex: 'Man', age: 37, address: '广东省' },
  { id: 10006, name: '王八', role: 'Designer', sex: 'Man', age: 39, address: 'Shanghai' }
])

const mergeCells = ref<VxeTablePropTypes.MergeCells>([
  { row: 0, col: 2, rowspan: 2, colspan: 2 },
  { row: 2, col: 1, rowspan: 3, colspan: 2 }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', name: '12人', no1: 356 }
])

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport()
  }
}
</script>
