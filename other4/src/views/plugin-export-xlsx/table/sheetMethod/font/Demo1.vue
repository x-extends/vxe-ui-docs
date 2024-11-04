<template>
  <div>
    <vxe-button @click="exportEvent">点击导出</vxe-button>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      :data="tableData"
      :export-config="exportConfig"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="no1" title="NO1"></vxe-column>
      <vxe-column field="no2" title="NO2" cell-type="string"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  no1: string
  no2: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: '张三', role: 'Develop', sex: 'Man', no1: '028', no2: '028' },
  { id: 10002, name: '李四', role: '研发', sex: 'Women', no1: '220', no2: '220' },
  { id: 10003, name: '王五', role: '产品经理', sex: 'Man', no1: '003200', no2: '003200' },
  { id: 10004, name: '老六', role: 'Designer', sex: 'Women', no1: '02040', no2: '02040' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', name: '12人', no1: '356' }
])

const exportConfig = reactive<VxeTablePropTypes.ExportConfig>({
  sheetMethod (params) {
    const { worksheet } = params
    worksheet.eachRow(excelRow => {
      excelRow.eachCell(excelCell => {
        // 设置单元格字体
        excelCell.font = {
          bold: true,
          size: 16,
          color: {
            argb: 'ff0000'
          }
        }
      })
    })
  }
})

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      type: 'xlsx'
    })
  }
}
</script>
