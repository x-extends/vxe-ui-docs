<template>
  <div>
    <vxe-button @click="exportEvent">直接导出 XLSX 文件</vxe-button>
    <vxe-table
      show-footer
      ref="tableRef"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age" :formatter="ageFormatter" :footer-formatter="ageFooterFormatter"></vxe-column>
      <vxe-column field="no1" title="NO1"></vxe-column>
      <vxe-column field="no2" title="NO2" cell-type="string"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  no1: string
  no2: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, no1: '028', no2: '028' },
      { id: 10002, name: '李四', role: '研发', sex: 'Women', age: 36, no1: '220', no2: '220' },
      { id: 10003, name: '王五', role: '产品经理', sex: 'Man', age: 44, no1: '003200', no2: '003200' },
      { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 38, no1: '02040', no2: '02040' }
    ]

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', name: '12人', age: '999', no1: 356 }
    ]

    return {
      tableData,
      footerData
    }
  },
  methods: {
    ageFormatter ({ cellValue }) {
      return `内容：${cellValue}`
    },
    ageFooterFormatter ({ itemValue }) {
      return `尾部：${itemValue}`
    },
    exportEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.exportData({
          type: 'xlsx'
        })
      }
    }
  }
})
</script>
