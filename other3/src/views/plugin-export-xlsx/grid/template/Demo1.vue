<template>
  <div>
    <vxe-button tatus="primary" @click="exportEvent">直接导出 XLSX 文件</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #describe_default="{ row }">
        <div>编号：{{ row.no1 }}</div>
        <div>职位：{{ row.role }}</div>
        <div>年龄：{{ row.age }}</div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

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
    const sexCellRender: VxeColumnPropTypes.CellRender = {
      name: 'FormatSelect',
      options: [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      exportConfig: {
        async sheetMethod (params) {
          const { worksheet } = params
          worksheet.eachRow((excelRow, i) => {
            // 设置行高
            if (i > 2) {
              excelRow.height = 80
            }
          })
        }
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        {
          title: '分组1',
          children: [
            { field: 'name', title: 'Name' },
            { field: 'sex', title: 'Sex', cellRender: sexCellRender }
          ]
        },
        {
          field: 'describe',
          title: 'Describe',
          exportMethod ({ row }) {
            return `自定义编号：${row.no1}\n自定义职位：${row.role}\n自定义年龄：${row.age}`
          },
          slots: {
            default: 'describe_default'
          }
        }
      ],
      data: [
        { id: 10001, name: '张三', role: 'Develop', sex: '1', age: 28, no1: '028', no2: '028', describe: '' },
        { id: 10002, name: '李四', role: '研发', sex: '0', age: 36, no1: '220', no2: '220', describe: '' },
        { id: 10003, name: '王五', role: '产品经理', sex: '1', age: 44, no1: '003200', no2: '003200', describe: '' },
        { id: 10004, name: '老六', role: 'Designer', sex: '0', age: 38, no1: '02040', no2: '02040', describe: '' }
      ]
    }

    return {
      gridOptions,
      sexCellRender
    }
  },
  methods: {
    exportEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.exportData({
          type: 'xlsx'
        })
      }
    }
  }
})
</script>
