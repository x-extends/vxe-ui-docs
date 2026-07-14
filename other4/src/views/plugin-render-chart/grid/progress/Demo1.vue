<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  num41: number
  num42: number
}

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

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 500,
  columnConfig: {
    resizable: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'num41', title: '进度条100', width: 180, cellRender: num41CellRender },
    { field: 'num42', title: '进度条10', width: 180, cellRender: num42CellRender }
  ],
  data: [
    { id: 101, name: 'test1', num41: 10, num42: 8 },
    { id: 102, name: 'test2', num41: 30, num42: 0 },
    { id: 103, name: 'test3', num41: 71, num42: 1 },
    { id: 104, name: 'test4', num41: 97, num42: 4 },
    { id: 105, name: 'test5', num41: 100, num42: 3 },
    { id: 106, name: 'test6', num41: 85, num42: 9 },
    { id: 107, name: 'test7', num41: 0, num42: 10 },
    { id: 108, name: 'test8', num41: 23, num42: 4 },
    { id: 109, name: 'test9', num41: 33, num42: 7 },
    { id: 1010, name: 'test10', num41: 66, num42: 2 }
  ]
})
</script>
