<template>
  <div>
    <vxe-button status="primary" @click="exportEvent">直接导出</vxe-button>
    <vxe-button status="primary" @click="opentEvent">高级导出</vxe-button>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      :export-config="exportConfig"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="id" title="ID" width="80" :visible="false"></vxe-column>
      <vxe-colgroup title="分组1" field="group1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age" :formatter="ageFormatter" :footer-formatter="ageFooterFormatter"></vxe-column>
      <vxe-column field="no1" title="NO1"></vxe-column>
      <vxe-column field="no2" title="NO2" cell-type="string"></vxe-column>
      <vxe-column field="cardNo1" title="Card No"></vxe-column>
      <vxe-column field="cardNo2" title="Card No String" cell-type="string"></vxe-column>
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
  cardNo1: string
  cardNo2: string
}

const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, no1: '028', no2: '028', cardNo1: '60001234567', cardNo2: '60001234567' },
  { id: 10002, name: '李四', role: '研发', sex: 'Women', age: 36, no1: '220', no2: '220', cardNo1: '50001234567', cardNo2: '50001234567' },
  { id: 10003, name: '王五', role: '产品经理', sex: 'Man', age: 44, no1: '003200', no2: '003200', cardNo1: '70001234567', cardNo2: '70001234567' },
  { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 38, no1: '02040', no2: '02040', cardNo1: '10001234567', cardNo2: '10001234567' }
])

const exportConfig = reactive<VxeTablePropTypes.ExportConfig>({
  type: 'xlsx',
  extraFields: ['id']
})

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', name: '12人', age: '999', no1: '356' }
])

const ageFormatter: VxeColumnPropTypes.Formatter = ({ cellValue }) => {
  return `内容：${cellValue}`
}

const ageFooterFormatter: VxeColumnPropTypes.FooterFormatter = ({ itemValue }) => {
  return `尾部：${itemValue}`
}

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData()
  }
}

const opentEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport()
  }
}
</script>
