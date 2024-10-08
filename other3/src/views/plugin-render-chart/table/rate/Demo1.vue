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
      <vxe-column field="num41" title="评分" width="180" :cell-render="{ name: 'rate' }"></vxe-column>
      <vxe-column field="num42" title="评分 - 自定义颜色" width="180" :cell-render="{ name: 'rate', props: { colors: ['#91C7AE', '#D48265'] } }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  num41: number
  num42: number
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 101, name: 'test1', num41: 1, num42: 4 },
      { id: 102, name: 'test2', num41: 3, num42: 0 },
      { id: 103, name: 'test3', num41: 1, num42: 1 },
      { id: 104, name: 'test4', num41: 3, num42: 4 },
      { id: 105, name: 'test5', num41: 1, num42: 3 },
      { id: 106, name: 'test6', num41: 3, num42: 3 },
      { id: 107, name: 'test7', num41: 2, num42: 1 },
      { id: 108, name: 'test8', num41: 0, num42: 4 },
      { id: 109, name: 'test9', num41: 1, num42: 2 },
      { id: 1010, name: 'test10', num41: 4, num42: 2 }
    ]

    return {
      tableData
    }
  }
})
</script>
