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
  num20: number[]
  num21: number[]
  num30: number[]
  num31: number[][]
  num23: number[]
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
      field: 'num20',
      title: '饼图 - 环形',
      width: 100,
      cellRender: {
        name: 'pie',
        props: {
          ring: {
            diameter: '60%'
          }
        }
      }
    },
    {
      field: 'num21',
      title: '饼图 - 自定义环形',
      width: 140,
      cellRender: {
        name: 'pie',
        props: {
          colors: ['#FFDB5C', '#F0F0F0'],
          ring: {
            diameter: '60%'
          },
          label: {
            formatter: '{value[0]}%'
          }
        }
      }
    },
    {
      field: 'num23',
      title: '饼图 - 实心',
      width: 100,
      cellRender: {
        name: 'pie'
      }
    },
    {
      field: 'num30',
      title: '饼图 - 自定义实心',
      width: 140,
      cellRender: {
        name: 'pie',
        props: {
          colors: ['#FFDB5C', '#91C7AE', '#D48265'],
          ring: {
            diameter: '60%',
            color: '#2F4554'
          },
          label: {
            color: '#ffffff',
            formatter: '概况'
          }
        }
      }
    },
    {
      field: 'num31',
      title: '多种混合',
      width: 200,
      cellRender: {
        name: 'pies',
        children: [
          {
            props: {
              tooltip: {
                formatter: '值：{value}'
              },
              colors: ['#FFDB5C', '#D48265'],
              ring: { diameter: '60%' }
            }
          },
          {
            props: {
              tooltip: {
                formatter: '值：{value}'
              }
            }
          },
          {
            props: {
              tooltip: {
                formatter: '值：{value}'
              }
            }
          }
        ]
      }
    }
  ],
  data: [
    { id: 101, name: 'test1', num20: [30, 70], num21: [30, 70], num30: [47, 67, 67], num31: [[60, 28, 26], [77, 100], [77, 100, 8, 55, 100, 77, 142]], num23: [20, 30, 50] },
    { id: 102, name: 'test2', num20: [50, 50], num21: [60, 40], num30: [60, 83, 33], num31: [[28, 60, 32], [88, 40], [22, 100, 9, 55, 111, 86, 100]], num23: [200, 400, 500] },
    { id: 103, name: 'test3', num20: [33, 67], num21: [27, 78], num30: [84, 11, 14], num31: [[100, 17, 39], [100, 220], [7, 100, 11, 77, 105, 77, 100]], num23: [10, 80, 10] },
    { id: 104, name: 'test4', num20: [11, 89], num21: [50, 50], num30: [25, 71, 67], num31: [[19, 76, 99], [77, 702], [33, 100, 77, 66, 174, 69, 100]], num23: [80, 10, 10] },
    { id: 105, name: 'test5', num20: [19, 81], num21: [67, 33], num30: [100, 29, 55], num31: [[35, 63, 100], [53, 8], [77, 100, 66, 33, 100, 97, 100]], num23: [18, 30, 26] },
    { id: 106, name: 'test6', num20: [16, 84], num21: [17, 83], num30: [66, 100, 67], num31: [[13, 57, 60], [330, 546], [11, 100, 58, 72, 100, 178, 100]], num23: [14, 33, 26] },
    { id: 107, name: 'test7', num20: [98, 2], num21: [86, 14], num30: [60, 9, 5], num31: [[60, 40, 0], [120, 100], [22, 100, 77, 44, 10, 77, 198]], num23: [20, 5, 15] },
    { id: 108, name: 'test8', num20: [63, 37], num21: [99, 1], num30: [55, 76, 67], num31: [[46, 71, 83], [77, 100], [77, 100, 65, 97, 9, 59, 100]], num23: [10, 20, 30, 40] },
    { id: 109, name: 'test9', num20: [48, 52], num21: [8, 92], num30: [97, 60, 41], num31: [[55, 33, 53], [747, 52], [73, 100, 78, 81, 100, 77, 174]], num23: [14, 20, 36] },
    { id: 1010, name: 'test10', num20: [72, 28], num21: [22, 78], num30: [17, 10, 31], num31: [[77, 100, 58], [75, 85], [14, 250, 59, 44, 16, 50, 100]], num23: [200, 400, 500] }
  ]
})
</script>
