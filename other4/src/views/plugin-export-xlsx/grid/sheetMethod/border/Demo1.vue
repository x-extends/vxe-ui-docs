<template>
  <div>
    <vxe-button @click="exportEvent">点击导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  no1: string
  no2: string
}

const gridRef = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  exportConfig: {
    sheetMethod (params) {
      const { worksheet } = params
      worksheet.eachRow(excelRow => {
        excelRow.eachCell(excelCell => {
        // 设置单元格边框
          excelCell.border = {
            top: {
              style: 'thin',
              color: {
                argb: 'ff0000'
              }
            },
            left: {
              style: 'thin',
              color: {
                argb: 'ff0000'
              }
            },
            bottom: {
              style: 'thin',
              color: {
                argb: 'ff0000'
              }
            },
            right: {
              style: 'thin',
              color: {
                argb: 'ff0000'
              }
            }
          }
        })
      })
    }
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    {
      title: '分组1',
      children: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' }
      ]
    },
    { field: 'sex', title: 'Sex' },
    { field: 'no1', title: 'NO1' },
    { field: 'no2', title: 'NO2 String', cellType: 'string' }
  ],
  data: [
    { id: 10001, name: '张三', role: 'Develop', sex: 'Man', no1: '028', no2: '028' },
    { id: 10002, name: '李四', role: '研发', sex: 'Women', no1: '220', no2: '220' },
    { id: 10003, name: '王五', role: '产品经理', sex: 'Man', no1: '003200', no2: '003200' },
    { id: 10004, name: '老六', role: 'Designer', sex: 'Women', no1: '02040', no2: '02040' }
  ],
  footerData: [
    { seq: '合计', name: '12人', no1: '356' }
  ]
})

const exportEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.exportData({
      type: 'xlsx'
    })
  }
}
</script>
