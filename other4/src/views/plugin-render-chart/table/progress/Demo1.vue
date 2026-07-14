<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="500"
      :column-config="{resizable: true}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="num41" title="进度条100" width="180" :cell-render="num41CellRender"></vxe-column>
      <vxe-column field="num42" title="进度条10" width="180" :cell-render="num42CellRender"></vxe-column>
      <vxe-column field="num43" title="进度条多颜色" width="180" :cell-render="num43CellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  num41: number
  num42: number
  num43: number
}

const tableData = ref<RowVO[]>([
  { id: 101, name: 'test1', num41: 60, num42: 8, num43: 80 },
  { id: 102, name: 'test2', num41: 30, num42: 5, num43: 70 },
  { id: 103, name: 'test3', num41: 71, num42: 9, num43: 60 },
  { id: 104, name: 'test4', num41: 97, num42: 4, num43: 40 },
  { id: 105, name: 'test5', num41: 100, num42: 4, num43: 50 },
  { id: 106, name: 'test6', num41: 85, num42: 9, num43: 55 },
  { id: 107, name: 'test7', num41: 50, num42: 10, num43: 60 },
  { id: 108, name: 'test8', num41: 73, num42: 4, num43: 100 },
  { id: 109, name: 'test9', num41: 43, num42: 7, num43: 90 },
  { id: 1010, name: 'test10', num41: 66, num42: 6, num43: 88 }
])

const num41CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'progress'
})

const num42CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'progress',
  props: {
    max: 10,
    height: 30,
    completedBgColor: '#D48265',
    label: {
      formatter: '{{value}}个'
    }
  }
})

const num43CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'progress',
  props: {
    completedBgColor ({ row }) {
      if (row.num43 > 80) {
        return '#9bd1b8'
      }
      if (row.num43 > 60) {
        return '#ffe566'
      }
      return '#c23531'
    }
  }
})
</script>
