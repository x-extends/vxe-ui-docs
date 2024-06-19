<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="500"
      :column-config="{resizable: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="num10" title="柱状图" width="200" :cell-render="{ name: 'bar', props: { bar: { max: 100 }, label: { formatter: '{value}%' } } }"></vxe-column>
      <vxe-column field="num11" title="柱状图 - 显示值" width="200" :cell-render="{ name: 'bar',  props: { label: { formatter: '{value}' }  } }"></vxe-column>
      <vxe-column field="num12" title="柱状图 - 最大值" width="200" :cell-render="{ name: 'bar', props: { bar: { max: 140 }, colors: ['#FFDB5C', '#91C7AE', '#D48265'], tooltip: { formatter: '值：{value}%' }, label: {  formatter: '{value}%' } } }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  num10: number[]
  num11: number[]
  num12: number[]
}

const tableData = ref<RowVO[]>([
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
])
</script>
