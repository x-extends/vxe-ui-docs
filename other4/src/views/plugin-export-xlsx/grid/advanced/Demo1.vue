<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
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
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  mergeCells: [
    { row: 0, col: 2, rowspan: 2, colspan: 2 },
    { row: 2, col: 1, rowspan: 3, colspan: 2 }
  ],
  exportConfig: {
    type: 'xlsx'
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
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
    { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
    { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10005, name: '小七', role: 'Designer', sex: 'Man', age: 37, address: '广东省' },
    { id: 10006, name: '王八', role: 'Designer', sex: 'Man', age: 39, address: 'Shanghai' }
  ],
  footerData: [
    { seq: '合计', name: '12人', no1: 356 }
  ]
})

const exportEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.openExport()
  }
}
</script>
