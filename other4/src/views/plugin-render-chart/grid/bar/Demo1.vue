<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  num10: number[]
  num11: number[]
  num12: number[]
}

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
    {
      field: 'num10',
      title: '柱状图',
      width: 200,
      cellRender: {
        name: 'bar',
        props: {
          bar: {
            max: 100
          },
          label: {
            formatter: '{value}%'
          }
        }
      }
    },
    {
      field: 'num11',
      title: '柱状图 - 显示值',
      width: 200,
      cellRender: {
        name: 'bar',
        props: {
          label: {
            formatter: '{value}'
          }
        }
      }
    },
    {
      field: 'num12',
      title: '柱状图 - 最大值',
      width: 200,
      cellRender: {
        name: 'bar',
        props: {
          bar: {
            max: 140
          },
          colors: ['#FFDB5C', '#91C7AE', '#D48265'],
          tooltip: {
            formatter: '值：{value}%'
          },
          label: {
            formatter: '{value}%'
          }
        }
      }
    }
  ],
  data: [
    { id: 101, name: 'test1', num10: [60], num11: [60, 111], num12: [60, 134, 76] },
    { id: 102, name: 'test2', num10: [85], num11: [33, 25], num12: [42, 73, 22] },
    { id: 103, name: 'test3', num10: [45], num11: [60, 104], num12: [6, 64, 44] },
    { id: 104, name: 'test4', num10: [88], num11: [76, 99], num12: [41, 81, 77] },
    { id: 105, name: 'test5', num10: [72], num11: [27, 157], num12: [48, 101, 76] },
    { id: 106, name: 'test6', num10: [50], num11: [8, 111], num12: [60, 5, 19] },
    { id: 107, name: 'test7', num10: [16], num11: [60, 6], num12: [9, 57, 34] },
    { id: 108, name: 'test8', num10: [24], num11: [23, 68], num12: [35, 111, 80] },
    { id: 109, name: 'test9', num10: [100], num11: [14, 66], num12: [27, 34, 98] },
    { id: 1010, name: 'test10', num10: [98], num11: [44, 98], num12: [29, 107, 127] }
  ]
})
</script>
