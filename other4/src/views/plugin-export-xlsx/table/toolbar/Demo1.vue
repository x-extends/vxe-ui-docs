<template>
  <div>
    <vxe-toolbar ref="toolbarRef" export></vxe-toolbar>
    <vxe-table
      border
      ref="tableRef"
      :export-config="{type: 'xlsx'}"
      :merge-cells="mergeCells"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VxeToolbarInstance, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const toolbarRef = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
  { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
  { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10005, name: '小七', role: 'Designer', sex: 'Man', age: 37, address: '广东省' },
  { id: 10006, name: '小八', role: 'Designer', sex: 'Man', age: 39, address: 'Shanghai' }
])

const mergeCells = ref<VxeTablePropTypes.MergeCells>([
  { row: 0, col: 2, rowspan: 2, colspan: 2 },
  { row: 2, col: 1, rowspan: 3, colspan: 2 }
])

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
