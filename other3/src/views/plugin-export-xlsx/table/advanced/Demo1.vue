<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      :export-config="{type: 'xlsx'}"
      :data="tableData"
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

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
      { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
      { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', name: '12人', no1: 356 }
    ]

    return {
      tableData,
      footerData
    }
  },
  methods: {
    exportEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.openExport()
      }
    }
  }
})
</script>
