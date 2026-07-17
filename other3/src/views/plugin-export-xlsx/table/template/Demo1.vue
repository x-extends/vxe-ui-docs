<template>
  <div>
    <vxe-button tatus="primary" @click="exportEvent">直接导出 XLSX 文件</vxe-button>
    <vxe-table
      border
      ref="tableRef"
      :export-config="exportConfig"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" :cell-render="sexCellRender"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="describe" title="Describe" :export-method="describeExportMethod">
        <template #default="{ row }">
          <div>编号：{{ row.no1 }}</div>
          <div>职位：{{ row.role }}</div>
          <div>年龄：{{ row.age }}</div>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeColumnPropTypes, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  no1: string
  no2: string
  describe: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: '张三', role: 'Develop', sex: '1', age: 28, no1: '028', no2: '028', describe: '' },
      { id: 10002, name: '李四', role: '研发', sex: '0', age: 36, no1: '220', no2: '220', describe: '' },
      { id: 10003, name: '王五', role: '产品经理', sex: '1', age: 44, no1: '003200', no2: '003200', describe: '' },
      { id: 10004, name: '老六', role: 'Designer', sex: '0', age: 38, no1: '02040', no2: '02040', describe: '' }
    ]

    const exportConfig: VxeTablePropTypes.ExportConfig= {
      async sheetMethod (params) {
        const { worksheet } = params
        worksheet.eachRow((excelRow, i) => {
          // 设置行高
          if (i > 2) {
            excelRow.height = 80
          }
        })
      }
    }

    const sexCellRender: VxeColumnPropTypes.CellRender = {
      name: 'FormatSelect',
      options: [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }

    return {
      tableData,
      exportConfig,
      sexCellRender
    }
  },
  methods: {
    describeExportMethod ({ row }) {
      return `自定义编号：${row.no1}\n自定义职位：${row.role}\n自定义年龄：${row.age}`
    },
    exportEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.exportData({
          type: 'xlsx'
        })
      }
    }
  }
})
</script>
