<template>
  <div>
    <vxe-button tatus="primary" @click="exportEvent">直接导出 XLSX 文件</vxe-button>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex" :cell-render="sexCellRender"></vxe-column>
      <vxe-column field="age" title="Age" :formatter="ageFormatter" :footer-formatter="ageFooterFormatter"></vxe-column>
      <vxe-column field="no1" title="NO1"></vxe-column>
      <vxe-column field="no2" title="NO2" cell-type="string"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTableInstance, VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  no1: string
  no2: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: '张三', role: 'Develop', sex: '1', age: 28, no1: '028', no2: '028' },
  { id: 10002, name: '李四', role: '研发', sex: '0', age: 36, no1: '220', no2: '220' },
  { id: 10003, name: '王五', role: '产品经理', sex: '1', age: 44, no1: '003200', no2: '003200' },
  { id: 10004, name: '老六', role: 'Designer', sex: '0', age: 38, no1: '02040', no2: '02040' }
])

const sexCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'FormatSelect',
  options: [
    { label: '女', value: '0' },
    { label: '男', value: '1' }
  ]
})

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', name: '12人', age: '999', no1: '356' }
])

const ageFormatter: VxeColumnPropTypes.Formatter<RowVO> = ({ row }) => {
  return `内容：${row.age}`
}

const ageFooterFormatter: VxeColumnPropTypes.FooterFormatter<RowVO> = ({ row }) => {
  return `尾部：${row.age}`
}

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      type: 'xlsx'
    })
  }
}
</script>
